import BookingDemo from './booking';
import MembershipDemo from './membership';
import CloudSystemDemo from './cloudSystem';
import EcommerceDemo from './ecommerce';
import OrderPlacementDemo from './orderPlacement';
import WebWebsiteDemo from './webWebsite';
import MobileAppDemo from './mobileApp';
import AttendanceDemo from './attendance';
import VisitorManagementDemo from './visitorManagement';
import BlockchainDemo from './blockchain';
import LoyaltyDemo from './loyalty';
import InventoryDemo from './inventory';
import LogisticsDemo from './logistics';
import DataAnalyticsDemo from './dataAnalytics';
import PaymentDemo from './payment';
import TicketingDemo from './ticketing';

export const demoRegistry = {
  Booking: BookingDemo,
  Membership: MembershipDemo,
  'Cloud System': CloudSystemDemo,
  eCommerce: EcommerceDemo,
  'Order Placement': OrderPlacementDemo,
  'Web/Website': WebWebsiteDemo,
  'Mobile App': MobileAppDemo,
  Attendance: AttendanceDemo,
  'Visitor Management': VisitorManagementDemo,
  Blockchain: BlockchainDemo,
  Loyalty: LoyaltyDemo,
  Inventory: InventoryDemo,
  Logistics: LogisticsDemo,
  'Data & Analytics': DataAnalyticsDemo,
  Payment: PaymentDemo,
  Ticketing: TicketingDemo,
};

export function DemoForTag({ tag, t, locale, item }) {
  const Component = demoRegistry[tag];
  if (!Component) return null;
  return <Component t={t} locale={locale} item={item} />;
}
