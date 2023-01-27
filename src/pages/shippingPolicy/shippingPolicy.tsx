import {
  ShippingPolicyCenter,
  ShippingPolicyContainer,
  ShippingPolicyh3,
  ShippingPolicyHeader,
  ShippingPolicyHeaderh1,
  ShippingPolicyInfo,
} from "./styles/shippingPolicy.styles";

export const ShippingPolicy = () => {
  return (
    <ShippingPolicyContainer>
      <ShippingPolicyCenter>
        <ShippingPolicyHeader>
          <ShippingPolicyHeaderh1>Shipping Policy</ShippingPolicyHeaderh1>
        </ShippingPolicyHeader>
        <ShippingPolicyh3>SHIPPING POLICY</ShippingPolicyh3>
        <ShippingPolicyInfo>
          Items typically ship within 3 - 5 days.
        </ShippingPolicyInfo>
        <ShippingPolicyInfo>
          However, if an order is placed around a holiday, or contains a limited
          item, it can take up to 14 days. We will always keep you posted!
        </ShippingPolicyInfo>
        <ShippingPolicyInfo>
          You will receive a confirmation email containing the tracking number
          as soon as your order is placed.
        </ShippingPolicyInfo>
        <ShippingPolicyInfo>
          Shipping charges are non-refundable, so please ensure you have entered
          your correct mailing address - especially unit/apartment numbers if
          applicable.
        </ShippingPolicyInfo>
        <ShippingPolicyInfo>
          NOTE: We are not responsible for lost, stolen, or damaged packages.
          Orders are out of our control as soon as we drop them off at the
          postal office. Please contact your local post office with your
          tracking number for any details regarding your shipment.{" "}
        </ShippingPolicyInfo>
      </ShippingPolicyCenter>
    </ShippingPolicyContainer>
  );
};
