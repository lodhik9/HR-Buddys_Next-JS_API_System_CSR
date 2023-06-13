
import "@styles/globals.css";

import NavBar from "@components/NavBar";
import LeftSide from "@components/LeftSide";
import Inbox from "@components/Inbox";
 import Provider from "@components/Provider";

export const metadata = {
  title: "hrbuddy",
  description: "Discover & Share HR",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
      <div className="gradient"/>

      <main className="flex  max-w-7xl mx-auto  sm:px-16 px-6" >
        <LeftSide />
        <div className="sm:px-6 px-3  w-full">
          <NavBar />
          <div className="w-full">
          <Inbox />
        </div>
          {children}
        </div>
      </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
