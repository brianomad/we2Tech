import { BookingA, BookingB, BookingC } from './booking';
import { OrderA, OrderB, OrderC } from './order';
import { EcomA, EcomB, EcomC } from './ecommerce';
import { CloudA, CloudB, CloudC } from './cloud';
import { MembershipA, MembershipB, MembershipC } from './membership';
import { VisitorA, VisitorB, VisitorC } from './visitor';

export const KEY_FOR_TAG = {
  Booking: 'booking',
  'Order Placement': 'order',
  eCommerce: 'ecommerce',
  'Cloud System': 'cloud',
  Membership: 'membership',
  'Visitor Management': 'visitor',
};

export const SCREENS = {
  Booking: [null, BookingA, BookingB, BookingC],
  'Order Placement': [null, OrderA, OrderB, OrderC],
  eCommerce: [null, EcomA, EcomB, EcomC],
  'Cloud System': [null, CloudA, CloudB, CloudC],
  Membership: [null, MembershipA, MembershipB, MembershipC],
  'Visitor Management': [null, VisitorA, VisitorB, VisitorC],
};

export function screenFor(tag, variant = 1) {
  const list = SCREENS[tag];
  return list ? list[variant] || list[1] : null;
}
