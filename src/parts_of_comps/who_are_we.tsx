export default function WhoAreWe() {
  return (
    <div className="flex flex-row w-full h-[30rem] items-center justify-center px-[4rem]">
      <div className="flex flex-col gap-[3rem] items-center w-1/2 py-[4.5rem] px-[4.5rem]">
        <div className="flex flex-col items-center">
          <div className="flex bg-orange-300 w-[3.5rem] items-center justify-center rounded-full px-4 text-white text-[16px]">
            intro
          </div>
          <div className="flex flex-row gap-1 items-center justify-centerfont-bold text-[25px] mt-3">
            welcome to frew
          </div>
          <div className="text-center w-[15rem]">
            the awesome people who make all of this possible
          </div>
        </div>
        <div className="flex flex-row gap-6 h-[15rem] w-full justify-between">
          <div className="h-full bg-pink-200 w-1/3"></div>
          <div className="h-full bg-blue-200 w-1/3"></div>
          <div className="h-full bg-green-200 w-1/3"></div>
        </div>
      </div>
      <div className="w-1/2 pl-[3rem] pr-[10rem] py-[4.5rem] text-[17px]">
        We are a dynamic team dedicated to revolutionizing the cafeteria
        experience through the development of a cutting-edge web application and
        mobile app. Our mission is to streamline every aspect of the cafeteria
        journey, from ordering and payment to pickup and delivery, making it
        convenient and efficient for both customers and staff. <br /> <br />{" "}
        With our innovative platform, users can easily browse menus, place
        orders, customize their selections, and track their orders in real-time.
        We are committed to continuously enhancing our services and are excited
        to explore the integration of additional features to further enhance the
        overall dining experience. <br /> <br />
        Join us on this journey as we redefine the way people interact with
        cafeterias and beyond.
      </div>
    </div>
  );
}
