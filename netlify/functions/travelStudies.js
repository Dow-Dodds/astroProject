// netlify-functions/caseStudies.js
export default async function handler(event, context) {
  // Example data
    const travelStudies = [
      { id: 1, location: "Naples", title: "Naples: 1", description: "Naples 1", image: "https://66e3bebae86395a3a9b28e4a--dowrecords.netlify.app/naples/naplesOne.png"},
      { id: 2, location: "Naples", title: "Naples: 2", description: "Naples 2", image: "https://66e3bebae86395a3a9b28e4a--dowrecords.netlify.app/naples/naplesTwo.png"},
      { id: 3, location: "Naples", title: "Naples: 3", description: "Naples 3", image: "https://66e3bebae86395a3a9b28e4a--dowrecords.netlify.app/naples/naplesThree.png"},
      { id: 4, location: "Naples", title: "Naples: 4", description: "Naples 4", image: "https://66e3bebae86395a3a9b28e4a--dowrecords.netlify.app/naples/naplesFour.png" },
      { id: 5, location: "Naples", title: "Naples: 5", description: "Naples 5", image: "https://66e3bebae86395a3a9b28e4a--dowrecords.netlify.app/naples/naplesFive.png"},

    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify(travelStudies),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };