import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://picsum.photos/seed/hats/400/400",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://picsum.photos/seed/jackets/400/400",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://picsum.photos/seed/sneakers/400/400",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://picsum.photos/seed/womens/400/400",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://picsum.photos/seed/mens/400/400",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
