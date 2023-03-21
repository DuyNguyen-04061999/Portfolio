import { public_key, service_id, template_id } from "@/dataID";
import emailjs from "@emailjs/browser";

export const emailService = {
  sendEmail: (data) => emailjs.send(service_id, template_id, data, public_key),
};
