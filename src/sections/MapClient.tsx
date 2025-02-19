import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Definisikan style untuk container peta
const mapContainerStyle = {
  height: '600px',
  width: '100%',
  position: 'relative' as const,
  zIndex: 1
};

const icon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

type Station = {
  code: string;
  name: string;
  position: [number, number];
  status: string;
};

const stations: Station[] = [
  { code: "SBY", name: "Surabaya", position: [-7.1999, 112.7406], status: "Aktif" },
  { code: "JKT", name: "Jakarta", position: [-6.2088, 106.8456], status: "Aktif" },
  { code: "MKS", name: "Makassar", position: [-5.1478, 119.4327], status: "Tidak Aktif" },
];

const StationDetailDialog = ({ 
  isOpen, 
  onClose, 
  station 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  station: Station | null;
}) => {
  if (!station) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl bg-white shadow-lg border-0">
        <div className="bg-blue-600 -mx-6 -mt-6 p-6">
          <DialogTitle className="text-2xl font-bold text-white">
            Detail Stasiun {station.name}
          </DialogTitle>
        </div>
        
        <div className="mt-6 space-y-6 px-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-blue-600"></div>
                Informasi Umum
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kode Stasiun:</span>
                  <span className="font-medium">{station.code}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nama Stasiun:</span>
                  <span className="font-medium">{station.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium px-2 py-1 rounded-md text-sm ${
                    station.status === "Aktif" 
                      ? "bg-green-100 text-green-600" 
                      : "bg-red-100 text-red-600"
                  }`}>
                    {station.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-blue-600"></div>
                Koordinat
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lintang:</span>
                  <span className="font-medium">{station.position[0]}°</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bujur:</span>
                  <span className="font-medium">{station.position[1]}°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-600"></div>
              Peralatan
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tipe Sensor:</span>
                <span className="font-medium">Radar & Pressure</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Interval Pengukuran:</span>
                <span className="font-medium">10 menit</span>
              </div>
              <div className="flex justify-between items-center col-span-2">
                <span className="text-gray-600">Last Maintenance:</span>
                <span className="font-medium">January 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const MapClient = () => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stationCode = event.target.value;
    const station = stations.find((s) => s.code === stationCode);
    if (station) {
      setSelectedStation(station);
    }
  };

  const handleShowDetail = (station: Station) => {
    setSelectedStation(station);
    setShowDetail(true);
  };

  type FlyToStationProps = {
    position: [number, number];
  };

  const FlyToStation = ({ position }: FlyToStationProps) => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.flyTo(position, 12, { duration: 1.5 });
      }
    }, [map, position]);
    return null;
  };

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container relative">
        <div className="section-heading">
          <h2 className="section-title">Tide Station Map</h2>
          <p className="section-des mt-5">
            Explore the distribution of Geomarine Tidal Expert stations across the region.
          </p>
        </div>

        <div className="mt-10 w-full border-2 border-gray-200 rounded-lg p-4 bg-gray-50 relative">
          <div className="absolute top-6 right-6 z-10 bg-white border border-gray-300 rounded-md p-2 shadow-md" style={{ width: "200px" }}>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={handleStationChange}
              value={selectedStation ? selectedStation.code : ""}
            >
              <option value="" disabled>-- Pilih Stasiun --</option>
              {stations.map((station) => (
                <option key={station.code} value={station.code}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>

          <div style={mapContainerStyle}>
            <MapContainer
              center={[-2.5, 118]} // Centered on Indonesia
              zoom={5}
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {selectedStation && (
                <FlyToStation position={selectedStation.position} />
              )}
              {stations.map((station) => (
                <Marker
                  key={station.code}
                  position={station.position}
                  icon={icon}
                >
                  <Popup>
                    <div className="min-w-[200px] text-center p-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 -m-2 -mt-2 p-3 mb-3 rounded-t-lg">
                        <h3 className="font-bold text-white text-lg">{station.name}</h3>
                      </div>
                      <div className="space-y-2 mb-3">
                        <div className="bg-gray-50 py-2 px-3 rounded-lg">
                          <span className="text-gray-600 text-sm">Kode Stasiun</span>
                          <div className="font-semibold text-blue-600">{station.code}</div>
                        </div>
                        <div className="bg-gray-50 py-2 px-3 rounded-lg">
                          <span className="text-gray-600 text-sm">Status</span>
                          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            station.status === "Aktif" 
                              ? "bg-green-100 text-green-600" 
                              : "bg-red-100 text-red-600"
                          }`}>
                            {station.status}
                          </div>
                        </div>
                      </div>
                      <button
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                        onClick={() => handleShowDetail(station)}
                      >
                        <span>Lihat Detail</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <StationDetailDialog
          isOpen={showDetail}
          onClose={() => setShowDetail(false)}
          station={selectedStation}
        />
      </div>
    </section>
  );
};