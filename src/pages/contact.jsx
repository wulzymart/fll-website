import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
const Contact = () => {
  return (
    <main>
      <div className="container text-center my-10 mx-auto">
        <h3 className="font-semibold text-2xl mb-5 font-body">Head Office</h3>
        <p className="mb-5">
          Location: KM 56 Agasa junction opposite DR. Ado Ibrahim Building Agasa
          junction Okene Kogi State
        </p>
        <div className="mb-2 text-sm">
          <p className="text-primary mb-1 font-medium">Main lines: </p>
          <WhatsAppIcon />
          <a
            className="mr-5"
            href="tel:(+234)8167900003
"
          >
            (+234)8167900003
          </a>
          <PhoneIcon />{" "}
          <a
            className="mr-0"
            href="tel:(+234)8133434400

"
          >
            (+234)8133434400
          </a>
        </div>
        <p className="mb-5 font-medium">
          Email:{" "}
          <a className="mr-0" href="mailto:firstlinelogistics01@gmail.com">
            firstlinelogistics01@gmail.com
          </a>
        </p>
      </div>
      <div class="container p-5 flex flex-wrap rounded md:p-10 bg-white mb-10 mx-auto">
        <div class="w-full md:w-1/4">
          <h3 class="font-semibold text-2xl mb-10">Kogi</h3>
        </div>
        <div class="w-full flex flex-wrap md:w-3/4">
          <div class="w-full md:w-1/2 px-2">
            <p class="font-medium text-primary text-lg mb-3">Okene 1</p>
            <p class="text-sm mb-10">
              Muhaibro plaza, Lagos bypass behind water works road, iruvucheba
              Okene Kogi State.
              <br />
              <a href="tel: +2349155784680">+2349155784680</a>
            </p>
          </div>
        </div>
      </div>
      <div class="container p-5 flex flex-wrap rounded md:p-10 bg-white mb-10 mx-auto">
        <div class="w-full md:w-1/4">
          <h3 class="font-semibold text-2xl mb-10">Oyo</h3>
        </div>
        <div class="w-full flex flex-wrap md:w-3/4">
          <div class="w-full md:w-1/2 px-2">
            <p class="font-medium text-primary text-lg mb-25">Ibadan 1</p>
            <p class="text-sm mb-10">
              Shop No 26, Hope junction Plaza Old Ife Rd Ibadan, Oyo state
              <br />
              <a href="tel: +2349155784668">+2349155784668</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
