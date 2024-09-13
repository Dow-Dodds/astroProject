// netlify-functions/caseStudies.js
export default async function handler(event, context) {
  // Example data
    const travelStudies = [
      { id: 1, location: "Naples", title: "Naples: 1", description: "Naples 1", image: "/public/naples/naplesOne.png"},
      { id: 2, location: "Naples", title: "Naples: 2", description: "Naples 2", image: "/public/naples/naplesTwo.png"},
      { id: 3, location: "Naples", title: "Naples: 3", description: "Naples 3", image: "/public/naples/naplesThree.png"},
      { id: 4, location: "Naples", title: "Naples: 4", description: "Naples 4", image: "/public/naples/naplesFour.png" },
      { id: 5, location: "Naples", title: "Naples: 5", description: "Naples 5", image: "/public/naples/naplesFive.png"},

    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify(travelStudies),
    };
  };