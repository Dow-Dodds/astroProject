export const GET = async () => {
  const travelStudies = [
    {
      id: 1,
      location: "Napoli",
      title: "Museo Archeological Nazionale di Napoli",
      description: "Farnese Coollection",
      image: "/public/naples/naplesOne.png",
    },
    {
      id: 2,
      title: "Museo Archeological Nazionale di Napoli Stairwell",
      location: "Napoli",
      description: "View of the Stairwell from the top floor",
      image: "/public/naples/naplesTwo.png",
    },
    {
      id: 3,
      title: "Museo Madre: Napoli – #2",
      location: "Napoli",
      description: "commissioned by the Madre museum in 2015 to the French artist Daniel Buren (Boulogne-Villancourt, 1938) to celebrate the relationship between the museum and its community",
      image: "/public/naples/naplesSix.png",
    },
    {
      id: 4,
      title: "Museo Madre",
      location: "Napoli",
      description: "Mural Unknown Artist",
      image: "/public/naples/naplesThree.png",
    },
   

    
    
  ];

  return new Response(JSON.stringify(travelStudies), {
    headers: { 'Content-Type': 'application/json' },
  });
};