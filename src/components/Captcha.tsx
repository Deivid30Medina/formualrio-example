import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onCaptchaChange: (token: string | null) => void;
}

const Captcha = ({ onCaptchaChange }: CaptchaProps) => {
  const onChange = (value: string | null) => {
    console.log("Captcha value:", value);
    onCaptchaChange(value);
  };

  return (
    <ReCAPTCHA sitekey="6LccsnAqAAAAABIAaA_mK0a-LgqYLIIKfW5LAJUb" onChange={onChange} />
  );
};

export default Captcha;
