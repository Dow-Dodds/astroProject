export async function get() {
  const travelStudies = [
    {
      id: 1,
      title: "Study 1",
      description: "Description of Study 1",
      image: "/public/naples/naplesOne.png",
    },
    {
      id: 2,
      title: "Study 2",
      description: "Description of Study 2",
      image: "/public/naples/naplesTwo.png",
    },
  ];

  return {
    body: JSON.stringify(travelStudies),
  };
}
