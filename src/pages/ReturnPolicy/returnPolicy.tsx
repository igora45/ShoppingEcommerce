import {
  ReturnPolicyCenter,
  ReturnPolicyContainer,
  ReturnPolicyh3,
  ReturnPolicyHeader,
  ReturnPolicyHeaderh1,
  ReturnPolicyInfo,
  ReturnSpan,
} from "./styles/returnPolicy.styles";

export const ReturnPolicy = () => {
  return (
    <ReturnPolicyContainer>
      <ReturnPolicyCenter>
        <ReturnPolicyHeader>
          <ReturnPolicyHeaderh1>Return Policy</ReturnPolicyHeaderh1>
        </ReturnPolicyHeader>
        <ReturnPolicyh3>RETURN POLICY</ReturnPolicyh3>
        <ReturnPolicyInfo>
          If you ordered the wrong size, color, or type, your order can be
          modified within hours of placing it. We are always willing to help,
          but if it's been too long it may not be possible.
        </ReturnPolicyInfo>
        <ReturnPolicyInfo>
          If you ordered the wrong size, color, or type, your order can be
          modified within hours of placing it. We are always willing to help,
          but if it's been too long it may not be possible.
        </ReturnPolicyInfo>
        <ReturnPolicyInfo>
          We do not offer exchanges, only returns. Please send the unworn,
          unwashed item(s) to:
        </ReturnPolicyInfo>
        <ReturnPolicyInfo>IGOR CARVALHO</ReturnPolicyInfo>
        <ReturnPolicyInfo>ATTN: RETURNS</ReturnPolicyInfo>
        <ReturnPolicyInfo>P.O. Box 501163</ReturnPolicyInfo>
        <ReturnPolicyInfo>Indianapolis, IN 46250</ReturnPolicyInfo>
        <ReturnPolicyInfo>
          For help regarding orders shoot us an email at{" "}
          <ReturnSpan>shopecommerce@gmail.com</ReturnSpan>
        </ReturnPolicyInfo>
      </ReturnPolicyCenter>
    </ReturnPolicyContainer>
  );
};
