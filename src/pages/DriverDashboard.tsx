import { motion } from "motion/react";
import { 
  Truck, 
  MapPin, 
  ClipboardCheck, 
  Clock, 
  AlertTriangle, 
  MessageSquare, 
  ChevronRight,
  Navigation,
  FileText,
  Settings,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DriverDashboard() {
  const driverName = "Ezekiel";
  const vehicleId = "TX-7482";
  
  const stats = [
    { label: "Hours Remaining", value: "8h 12m", color: "text-green-500" },
    { label: "Weekly Mileage", value: "2,482", color: "text-brand-blue" },
    { label: "Safety Score", value: "98.4", color: "text-brand-orange" }
  ];

  const quickActions = [
    { label: "Pre-Trip Inspection", icon: ClipboardCheck, color: "bg-brand-blue" },
    { label: "View Active Route", icon: Navigation, color: "bg-brand-orange" },
    { label: "Scan Bills (BOL)", icon: FileText, color: "bg-gray-800" },
    { label: "Emergency Assist", icon: AlertTriangle, color: "bg-red-600" }
  ];

  const notifications = [
    { title: "Dispatch Update", time: "10m ago", message: "Pickup at Houston Port delayed by 20 mins." },
    { title: "Weather Alert", time: "1h ago", message: "Heavy rain expected on I-10 East." }
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F5] pb-24 lg:pb-12 pt-24 font-sans">
      <div className="max-w-md mx-auto px-4 md:max-w-6xl">
        
        {/* Header / Identity */}
        <header className="flex items-center justify-between mb-8">
           <div className="text-left">
             <div className="text-[10px] font-black uppercase tracking-widest text-brand-gray mb-1">On Duty // Active</div>
             <h1 className="text-2xl font-black text-brand-blue tracking-tighter uppercase">Welcome, {driverName}</h1>
             <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Unit {vehicleId} // KW T680</span>
             </div>
           </div>
           <button className="relative p-2 bg-white rounded-full shadow-sm">
             <Bell className="w-5 h-5 text-brand-blue" />
             <span className="absolute top-1 right-1 w-2 h-2 bg-brand-orange rounded-full border-2 border-white" />
           </button>
        </header>

        {/* Dynamic Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-3 rounded-xl shadow-sm border-b-2 border-transparent hover:border-brand-orange transition-all"
            >
              <div className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</div>
              <div className={`text-sm md:text-lg font-black ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions Grid - Mobile Primary */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {quickActions.map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 active:scale-95 transition-all text-center aspect-square"
            >
              <div className={`${action.color} p-4 rounded-2xl text-white mb-4 shadow-lg`}>
                <action.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue leading-tight px-2">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active Load / Trip Status */}
        <div className="bg-brand-blue rounded-3xl p-6 mb-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-10 rounded-full -mr-10 -mt-10" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
               <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest">Active Load #4829</div>
               <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span className="text-[10px] font-bold">ETA: 14:30</span>
               </div>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-orange ring-4 ring-brand-orange/20" />
                    <div className="w-0.5 h-10 bg-white/20 my-1" />
                    <div className="w-3 h-3 rounded-full border-2 border-white/50" />
                  </div>
                  <div className="flex-1">
                     <div className="mb-6">
                        <div className="text-[8px] uppercase font-bold tracking-widest text-white/50 mb-1">Pick Up</div>
                        <div className="text-sm font-bold">Houston Port, Terminal B</div>
                        <div className="text-[10px] text-white/70">Completed 08:00 AM</div>
                     </div>
                     <div>
                        <div className="text-[8px] uppercase font-bold tracking-widest text-white/50 mb-1">Delivery</div>
                        <div className="text-sm font-bold">Birmingham Distribution</div>
                        <div className="text-[10px] text-white/70">342 Miles Remaining</div>
                     </div>
                  </div>
               </div>
            </div>

            <Link 
              to="/active-trip"
              className="w-full mt-8 flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all group"
            >
               <span className="text-[11px] font-black uppercase tracking-widest">Open Trip Logistics</span>
               <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Notifications / Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
             <h2 className="text-xs font-black uppercase tracking-widest text-brand-blue">Operational Alerts</h2>
             <button className="text-[9px] font-bold text-brand-orange uppercase">Clear All</button>
          </div>
          {notifications.map((note, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-brand-orange flex items-start gap-4">
               <div className="bg-brand-light p-2 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-brand-orange" />
               </div>
               <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                     <span className="text-[10px] font-black uppercase text-brand-blue">{note.title}</span>
                     <span className="text-[8px] font-bold text-gray-400">{note.time}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-tight">{note.message}</p>
               </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3 px-6 flex items-center justify-between md:hidden z-50">
         <button className="flex flex-col items-center gap-1 text-brand-orange">
            <Truck className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Home</span>
         </button>
         <button className="flex flex-col items-center gap-1 text-gray-400">
            <MapPin className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Fleet</span>
         </button>
         <div className="relative -mt-10">
           <button className="bg-brand-blue w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-[#F0F2F5]">
              <Navigation className="w-6 h-6" />
           </button>
         </div>
         <button className="flex flex-col items-center gap-1 text-gray-400">
            <MessageSquare className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Log</span>
         </button>
         <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-brand-orange">
           <Link to="/settings" className="flex flex-col items-center gap-1">
            <Settings className="w-6 h-6" />
            <span className="text-[8px] font-black uppercase">Profile</span>
           </Link>
         </button>
      </nav>
    </div>
  );
}
