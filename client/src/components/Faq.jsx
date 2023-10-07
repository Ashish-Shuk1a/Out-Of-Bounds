import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "What is event management software?",
      content: `Event management software is a comprehensive technology solution designed to assist event planners in organizing various types of events, such as conferences, workshops, and trade shows, across different formats like onsite, online, and hybrid.

      It streamlines the entire event planning process, from building an event website and managing ticketing to handling event day operations, including check-in, badging, session management, and event analytics. event day operations like check-in and badging, session management, and event analytics.`,
    },
    {
      title:
        "How does event management software help organize successful events?",
      content: `Event management software can benefit event planners in many ways. Experience the advantages of Event Management Platform:

        Time-saving: Automate tasks and streamline processes with a single tool, eliminating the need for multiple platforms.
        Enhanced attendee engagement: Interact with attendees through various channels for a more immersive experience.
        Personalized customization: Tailor your event website, app, and forms to your preferences.
        Data-driven insights: Access in-depth reports and analytics to make informed decisions and boost event ROI.`,
    },
    {
      title: "What are the key features of event management software?",
      content: `Essential Features to Consider in an Event Management Software:

      Event ticketing: Streamline registration and ticket sales.
      Sponsor and exhibitor management: Organize and coordinate with key partners.
      Event marketing tools: Boost event visibility and reach your target audience.
      Attendee engagement: Keep your audience connected and involved.
      Website builder: Create visually appealing, informative event websites.
      Customizable forms: Collect relevant data with tailored registration and feedback forms. `,
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "#00000f",
  arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: "+",
  tabFocus: true,
};

export default function Faqu() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center max-w-3xl">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
