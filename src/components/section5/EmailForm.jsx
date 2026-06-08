import { useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";

const EmailForm = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const handerSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_zv5oglb";
    const contactTemplateId = "template_u2s0av6";
    const autoReplyTemplateId = "template_iejlgdb";
    const publicKey = "g6G5K61qZMs8yKmiD";

    const templateParams = {
      first_name: fname,
      last_name: lname,
      email: email,
      phone: phone,
      message: text,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceId, contactTemplateId, templateParams, publicKey)
      //   .send(serviceId, autoReplyTemplateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFName("");
        setLName("");
        setEmail("");
        setPhone("");
        setText("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    emailjs
      //   .send(serviceId, contactTemplateId, templateParams, publicKey)
      .send(serviceId, autoReplyTemplateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFName("");
        setLName("");
        setEmail("");
        setPhone("");
        setText("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div className="h-full w-full flex  justify-between">
      <form
        onSubmit={(event) => handerSubmit(event)}
        className="w-full p-4 items-center flex flex-col gap-4"
        action=""
      >
        <div className="h-12 w-full flex flex-row gap-4 justify-around">
          <div className="relative hover:scale-105 focus:scale-105 flex items-center w-1/2">
            <User className="absolute left-4" strokeWidth={0.75} />
            <input
              type="text"
              value={fname}
              onChange={(event) => setFName(event.target.value)}
              required={true}
              placeholder="First Name"
              className="h-full w-full border  border-white/30 rounded-xl flex gap-4 p-2 pl-13 px-4 text-lg placeholder-shown:font-medium placeholder-shown:text-lg"
            />
          </div>
          <div className="relative hover:scale-105 focus:scale-105 flex items-center w-1/2">
            <User className="absolute left-4" strokeWidth={0.75} />
            <input
              type="text"
              value={lname}
              onChange={(event) => setLName(event.target.value)}
              required={true}
              placeholder="Last Name"
              className="h-full w-full border border-white/30 rounded-xl flex gap-4 p-2 pl-13 px-4 text-lg placeholder-shown:font-medium placeholder-shown:text-lg"
            />
          </div>
        </div>
        <div className="relative hover:scale-105 focus:scale-105 flex items-center w-full">
          <Mail className="absolute left-4" strokeWidth={0.75} />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required={true}
            placeholder="Email"
            className="border border-white/30 h-12 w-full p-2 px-4 pl-13  text-lg rounded-xl placeholder-shown:font-medium placeholder-shown:text-lg"
          />
        </div>
        <div className="relative hover:scale-105 focus:scale-105 flex items-center w-full">
          <Phone className="absolute left-4" strokeWidth={0.75} />
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone No. (Optional)"
            className="border border-white/30 h-12 w-full p-2 px-4 pl-13  text-lg rounded-xl placeholder-shown:font-medium placeholder-shown:text-lg"
          />
        </div>
        <div className="relative hover:scale-105 focus:scale-105 flex items-start w-full">
          <MessageSquare className="absolute left-4 top-3" strokeWidth={0.75} />
          <textarea
            value={text}
            required={true}
            onChange={(event) => setText(event.target.value)}
            placeholder="Share Your Thoughts"
            className="h-30 w-full border border-white/30 p-2 px-4 pl-12 rounded-xl  placeholder-shown:font-medium placeholder-shown:text-lg"
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            console.log(fname);
            console.log(lname);
            console.log(email);
            console.log(phone);
            console.log(text);
          }}
          className="border border-white/30 h-fit w-fit px-4 py-2 bg-white/10 active:scale-95 hover:bg-white/20 hover:shadow-xl hover:scale-105 rounded-4xl flex flex-row gap-2 items-center text-xl font-medium font-serif backdrop-blur-md"
        >
          <Send strokeWidth={1} />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
