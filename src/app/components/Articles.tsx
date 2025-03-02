import Popup from "./Popup";

type Article = {
  image: string;
  description: string;
}

const Articles = () => {

  const articles: Article[] = [
    {
      "image": "/article_1.svg",
      "description": "Gymnastics is a fun and rewarding activity that helps kids build strength, flexibility, and coordination while promoting overall fitness. It boosts confidence as children learn new skills and achieve their goals. Gymnastics also teaches discipline, focus, and teamwork, which are valuable in school and life. Kids set and accomplish goals, whether mastering new tricks or competing in events, keeping them motivated and engaged. The skills learned in gymnastics, like balance and flexibility, benefit other sports as well. Ultimately, gymnastics promotes a healthy, active lifestyle and provides kids with valuable skills, friendships, and fun."
    },
    {
      "image": "/article_2.svg",
      "description": "To excel in gymnastics and stay safe, focus on key aspects that support both performance and well-being. Mastering proper technique ensures skills are performed safely and effectively. Strength, flexibility, and endurance are essential, so regular conditioning exercises and stretching routines are important. Always prioritize safety by using proper equipment, mats, and following coach instructions. Mental focus is crucial, and mental conditioning like visualization can improve concentration. Proper nutrition supports energy and recovery, while rest and recovery prevent injuries and help the body heal. Consistent practice, goal setting, and mental resilience are key to growth, and maintaining equipment ensures safety during training. By focusing on these elements, gymnasts can enhance performance and enjoy a safe, fulfilling experience."
    },
    {
      "image": "/article_3.svg",
      "description": "Gymnastics is a sport for everyone, regardless of age or ability. While it’s often thought to be for kids, adults can enjoy gymnastics too, improving fitness and confidence at any age. You don’t need to be naturally flexible; flexibility develops over time with training. Gymnastics is safe when practiced with proper coaching and equipment, and it’s for both boys and girls, with impressive events for all. It requires a balance of strength and flexibility, not just flexibility. Though gymnastics is challenging, it doesn’t stunt growth, and many people practice for fun or fitness, not just competition. The sport also involves more than tumbling, with skills in balance, coordination, and artistry. While competitive gymnastics can be expensive, recreational classes are affordable. Gymnastics offers many benefits—don’t let myths hold you back from giving it a try!"
    }
  ];

  return (
    <div className="bg-brandLightPink">
      <div className="max-w-full mx-auto px-2 py-2">
        {/* Grid layout: 3 images and 1 text box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          {articles.map((article, index) => (
            <div key={index} className="relative w-full">
              <Popup image={article.image} description={article.description} index={index}></Popup>
              </div>))}
          {/* Last Grid Box for "Read Our Articles" */}
          <div className="bg-brandHotPink flex items-center justify-center p-6 w-full">
            <h2 className="text-7xl font-bold text-brandWhite text-center">
              Read Our Articles
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
