import { useState } from "react";

import SlidingBox from "../slidingBox/SlidingBox";
import Artist from './Artist';

import styles from "./Artists.module.css";


const listOfArtists = [
  {
    id: "1",
    name: "DENNIS BAKER",
    sculpture: "Star Formation #8",
    bio:"The City of Sculpture’s first artist-in-residence is Dennis C. Baker, who is working at Hamilton Scrap Processors each weekend. Dennis grew up in Northern Indiana and attended Manchester College. He graduated with a degree in biology and biochemistry. During college years, he took classes in art, specifically painting. In 1979, Dennis moved to Cincinnati where he works for a cardiovascular device company, Medtronic, Inc. Now a consultant for them, Dennis spends his time in operating rooms. ‘I have always enjoyed working with my hands as a stress reliever.’ Dennis says. ‘ Over the years I constantly tried new things - one of which was welding, which I absolutely fell in love with.’ Dennis graduated in 1996 from a vocational school’s welding class and has taken several advanced courses since on welding, painting, and applying gold leaf & patina’s to his artwork. He considers himself to essentially be self-taught and is proud of his development. ",
  },
  {
    id: "2",
    name: "FRED X. BROWNSTEIN",
    sculpture: "Shared Vision #6",
    bio:" Mississippi native, Fred X. Brownstein, received a bachelor of fine arts degree at the San Francisco Art Institute following four years at Tulane University. He then studied for a ten-year period in Italy, first apprenticed in the late 1970's as a marble sculptor with the Pasquine Studio in Querceta, Italy. Beginning in 1980, he studied the figure with Professor Nerina Simi in Florence. He has been an artist-in-residence at Brookhaven College, The Taft School, and Karolyi Foundation in France. Brownstein is a guest lecturer at Smith College and the Chesterwood Museum in Stockbridge, MA. He has received numerous awards, and his work has been exhibited widely in the United States in public and private collections including the Museum of Southern Jewish Experience and the University of Connecticut.",
  },
  {
    id: "3",
    name: "ROSALIND COOK",
    sculpture: "Legacy of Literature #1 | Someday #23 | Come Unto Me #10",
    bio: "Rosalind Cook's life size and monumental works can be seen across the country in places such as Ronald McDonald Houses, churches, libraries and hospitals. Perhaps her best-known monument depicts Christ with the children of the world at the World Vision Headquarters in Washington. Her work has been exhibited in shows in New York, at the Gilcrease Museum, Albuquerque Museum, Palm Desert, Scottsdale, Jackson Hole and in select gallery shows throughout the United States and at the Sculpture in the Park show in Loveland, Colorado. Rosalind Cook attributes consistent growth to study and to teaching sculpture classes. She teaches at the Loveland Academy of Art, Philbrook Museum of Art in Tulsa, the Fechin Institute in Taos, and Scottsdale Artists' School in Arizona. Rosalind's sculptures have been shown in Southwest Art, Art and Antiques, Oklahoma Today, Virtue, and Tulsa People magazines.",
  },
{
  id: "4",
  name: "GEORGE DANHIRES",
  sculpture: "Firefighter Memorial #4",
  bio:"George Danhires of Kent, Ohio is both a sculptor and oil-based artist. His sculptures have been commissioned by numerous public and private institutions and are on display in four states. Much of his engaging works of art symbolize and pay tribute to the vitality of people and highlight facets of community life. Other works of Danhires include ‘Education’, ‘Claudia in Striped Dress’, and the bronze figure ‘James Bradley’, who as both a slave and free man symbolizes the Underground Railroad. The latter figure is seated on an actual park bench overlooking the Ohio River. ",
},
  {
    id: "5",
    name: "JANE DEDECKER",
    sculpture: "Snapshot #12",
    bio:" Family is the focus of Jane DeDecker's life and art. Childhood innocence is DeDecker's bread and butter theme. A Loveland, Colorado artist, her portfolio typically includes subjects such as a group of kids playing on monkey bars, two boys pushing off on a bike, or a trio of girls huddled under an umbrella. DeDecker's style also leaves room for interpretation. ‘The finished piece isn't the end,’ she says. ‘The sculpture lives beyond me, my studio and the foundry. I want viewers to see themselves and their lives in my sculpture’. Jane DeDecker's commissions include ‘Over There’ for President George Bush and the President's Committee for the Handicapped and ‘Albert Gallatin’ for the U.S. National Park Service. She sculpts in monumental as well as miniature scale.",
  },

{
  id: "6",
  name: "MALLORY FELTZ",
  sculpture: "Complexity #34",
  bio:"Mallory Feltz, a graduating art student at the University of Cincinnati, has donated a cast bronze piece to be the next installation for the City of Sculpture. Originally from Dayton, Feltz moved to Cincinnati to attend UC’s DAAP (Design, Architecture, Art and Planning) program. She is now looking at grad schools and is considering Miami University. Mallory states: ‘I was always creating art for as long as I can remember. Building, painting, drawing, dancing, anything creative was ‘my cup o’ tea.’ Why sculpture: ‘Really it’s my love of actively creating something tangible. I feel most comfortable, and yet still challenged, when I am up, running around, building and moving. All I know is that art is an extension of my life and sculpture is an extension of my body.’ ",
},
{
  id: "7",
  name: "STUART FINK",
  sculpture: "Community #26",
  bio:"Stuart Fink is a resident of Cincinnati and a consultant to the DAAP Galleries and the University of Cincinnati. Fink designed ‘Community’ at Miami University Hamilton to be interactive as benches and decorative with plantings of ornamental grasses and perennials. ",
},
{
  id: "8",
  name: "JARRETT HAWKINS",
  sculpture: "Pioneer Family #3 | No Child Left Behind #21",
  bio:"Jarrett Hawkins lives and works in Deer Park, Ohio. He received his sculpture education at Miami University. Jarrett has supported himself both as a sculptor and as a furniture and cabinetmaker. He has executed a variety of public and private commissions, both figurative and abstract.",
},
{
  id: "9",
  name: "JONATHAN HILS",
  sculpture: "Resurgence #39",
  bio:" From Mr. Hils Website: Absence and presence are integral to my work. Using chaotic systemization and repetitive actions, my work intertwines substantial aspects of physical complexity that coalesce into works that have a distinct sense of delicacy and order. The relationship between interior and exterior space, permeable and retentive, and varying line/light density are achieved through obsessive fabrication and drawing techniques inspired by nature, science and industry. Associates to manufacturing, fractals, and organic bio-computational forms are evident whether generated by fabricating thousands of small steel components together or rendering digitally drawn vertices patterns. Most of my work alludes to organic abstraction while hinting at a manufacturing or industrial aesthetic often seen in both man-made and natural constructions. Occasionally, works that are more representational in nature and informed by a desire to implicate politics, race, and belief systems into a broader dialogue of systemization and chaos.",
},
{
  id: "10",
  name: "DARYL JOHNS",
  sculpture: "Keeper of the Garden #15",
  bio:"Johns grew up in rural Ohio and developed an early interest in making things with his hands. Johns explains, ‘At age thirteen, I completed my first carving of a pig with a very dull pocketknife and a piece of buckeye. Over the years, I gained experience by endlessly experimenting with many types of wood and subject matter. As an artist, I am largely self-taught.’ Carving stone has also been a natural curiosity for him. Using Indiana limestone, his indoor and outdoor sculptures are both large and small-scale, and include personalized commissions. Johns’ subject matter ranges from people and animals to abstract creations and organic garden designs. Sculptures by Johns are in private collections from coast to coast, in addition to three pieces in Wales . His first piece in a public setting has been installed in ‘The City of Sculpture’ – Hamilton , Ohio.",
},
{
  id: "11",
  name: "ANDREA MYKLEBUST & STANTON G. SEARS",
  sculpture: "Hamilton Gateway Butler County Peace Memorial #16 | Peace Officer Memorial #28",
  bio:"Andrea Myklebust and Stanton Gray Sears were the design team chosen to execute a gateway structure and monumental lantern for the new Government Services Center. Completed in summer of 2000, it was at the dedication of ‘Hamilton Gateway’ that Governor Bob Taft signed a proclamation designating Hamilton as the ‘City of Sculpture’. Other public and civic artwork of Myklebust and Sears include the sculptural seating area for the Florida State Department of Health, a 63-foot sculptural tower for the 25-foot North Hennepin Community College Carillon, and the Minnesota Vietnam Veterans Memorial in St. Paul Minnesota. ‘It is our strong belief that the best civic artwork forges connections between people and their physical environment.’ ",
},
{
  id: "12",
  name: "MILES METZGER",
  sculpture: "When it rains it Pours #36",
  bio:"Mr. Miles Metzger’s career began in San Miguel de Allende, Mexico, where he studied sculpture. There he learned the Spanish language and received acclamations for his talent. After returning to the United States, Metzger pioneered the mining and use of soapstone upon discovering large deposits of carving quality Steatite in the California Sierra Nevada Mountain range in 1973. Metzger began showing his sculpture at fine art galleries in mid 1974. In 1989, Metzger opened a 7,000 sq. foot studio and showroom in Angels Camp, California. Today Metzger sculpts in stone, bronze, wood, clay, steel, and synthetics. He also contracts the reproduction of his designs through the use of molds and multi-carvers in China, Mexico, and Brazil. He has trained many carvers in past years; some of these craftsmen now have successful careers in sculpture. Metzger’s studio and gallery, located in St. Helena, California, opened in 2000. ",
},
{
  id: "13",
  name: "DALE ROGERS",
  sculpture: "4 People & Guitar #39 | Big Dog #38",
  bio:" Dale is a full time metal sculptor from Massachusetts. He designs both large-scale sculptures for individual installation with private collectors and temporary public exhibits full of multiple pieces. His love for art lies in abstract geometrics, and much of his body of work encompasses the clean simple properties of that style. Over the years, he has incorporated iconic and whimsical shapes into my sculptures that allow viewers to connect with my art on an emotional level. His public exhibits feature sculptures that do just this. He strives to create thought-provoking work that is sophisticated, easily recognized, and will serve as a mental postcard. Stainless Steel and Cor-Ten Steel are the metals he chooses to work with. The Stainless Steel is beautiful and versatile. The surface of it can be done in many different finishes (as you will see in our gallery). The variations add dimension and depth to the different sculptures. The Cor Ten is chosen for its ‘long life/low maintenance’ reputation. It is what cities and the federal government use to make bridges out of. It oxidizes over time and then seals itself. It offers an organic and simple element to the sculptures while the Stainless Steel brings in a little more pizzazz and punch.",
},
{
  id: "14",
  name: "NANCY SCHON",
  sculpture: "Lentil #11",
  bio:"Nancy Schon’s commissioned work found in Boston, MA include Friends of the Public Garden - ‘Make Way for Ducklings’ sculpture, the ‘Gateway to Beacon Hill’, and ‘Tortoise and Hare’ at Copley Square. In 1991, Mrs. Barbara Bush gave Mrs. Raisa Gorbachev a copy of the ‘Make Way for Ducklings’ sculpture placed in Novodevichy Park, Moscow on behalf of ‘the children of the U.S.A. to the children of the USSR’. Awards and recognitions include the Governor’s Council on Arts and Humanities (MA), Governor’s Task Force on Accessibility of the Arts, Honorary Chair - Copley Society, and many others. According to Ms. Schon, ‘When I first started doing Public Art, I noticed that people from ages 2 to 92 look at sculptures in parks rather casually, and then go on their way. One day, I saw a sculpture of a child with a cat. The child was not noticed, but the cat was patted, hugged, and smiled at. This gave me a profound insight. I decided, from that event, that I wanted my sculpture to be interactive and touched.’ ",
},
{
  id: "15",
  name: "DENNIS SOHOCKI",
  sculpture: "Double Dancer #17",
  bio:"Dennis Sohocki has created and installed numerous monuments ranging in height from 6 to 20 feet. He has over 25 years of sculptural experience in Bronze, Stainless Steel, Marble and Hardwood. Prestigious national and international shows that have invited him to exhibit include The National Academy of Design, Marmol Sol VI International Sculpture Symposium, North American Sculpture Exhibition, both the Kennedy and Denver Centers for the Performing Arts, the Cleveland Art Museum, and more. His sculptures are in numerous public and private collections such as General Motors, Michigan Bell, Microsoft, and many others. Dennis has lectured on and taught sculpture in the United States as well as abroad. He is a craftsman as well as an artist who prides himself in creating the highest quality sculptures possible.",
},
{
  id: "16",
  name: "JEDGAR TAFUR",
  sculpture: "Space Tower #24 | Symmes Monument #29",
  bio:"Edgar Tafur, a former Hamilton resident, created ‘Space Tower’ for the Cincinnati Playhouse in the Park. It was purchased by Hamilton physician Dr. Richard Glins in 1980 and installed in the Peter R. Rentschler Park on the west bank of the Great Miami River near the High-Main Street Bridge. The bicentennial Gift to the City of Hamilton from Historic Hamilton, Inc. in 1991 was the restoration of ‘Symmes Monument’, which was completed by Mr. Tafur. Additionally, Tafur was commissioned for a piece at the Lewis Center Chapel in Cincinnati.",
},
{
  id: "3",
  name: "RUDOLPH F. THEIM",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Victory, The Jewel of the Soul (a.k.a. Billy Yank) #2",
  bio:"Rudolph Thiem, born in 1859, studied sculpture making in Berlin, Germany before immigrating to Hamilton in 1887. Thiem’s work at the Estate Stove Company in Hamilton included the art that adorned the nationally recognized Estate stoves. His design for ‘Victory’, a 3,500 pound, 14 foot, bronze statue of a young Civil War soldier, was selected in a national competition in 1906. Details on the statue are so exact that coat buttons on the bronze soldier include the letters USA. Mr. Thiem modeled the soldier’s face after his own. The statue is waving his cap victoriously in the air while standing on an exploded shell. ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
{
  id: "3",
  name: "JANE DEDECKER",
  sculpture: "Snapshot #12",
  bio:" ",
},
];


const Artists = (props) => {
  const [artistWasClicked, setArtistWasClicked] = useState(false);
  // const [missionWasClicked, setMissionWasClicked] = useState(false);

  const artistClicker = () => {
    setArtistWasClicked((previous) => !previous);
  };


const displayedArtists = listOfArtists.map(artist => (
  <Artist artist={artist} key={artist.id} />
))

return (
  <SlidingBox>{displayedArtists}</SlidingBox>
)


  // return (
  //   <SlidingBox>
  //     <div className={styles.innerContentContainer}>
  //       <div className={styles.accordion} onClick={artistClicker}>
  //         <p className={styles.artistName}>DENNIS BAKER</p>
  //       </div>

  //       {artistWasClicked && (
  //         <div className={styles.accordionContent}>
  //           <p>Star Formation #8</p>

  //           <p>
  //             The City of Sculpture's first artist-in-residence is Dennis C.
  //             Baker, who is working at Hamilton Scrap Processors each weekend.
  //             Dennis grew up in Northern Indiana and attended Manchester
  //             College. He graduated with a degree in biology and biochemistry.
  //             During college years, he took classes in art, specifically
  //             painting. In 1979, Dennis moved to Cincinnati where he works for a
  //             cardiovascular device company, Medtronic, Inc. Now a consultant
  //             for them, Dennis spends his time in operating rooms. "I have
  //             always enjoyed working with my hands as a stress reliever." Dennis
  //             says. " Over the years I constantly tried new things - one of
  //             which was welding, which I absolutely fell in love with." Dennis
  //             graduated in 1996 from a vocational school's welding class and has
  //             taken several advanced courses since on welding, painting, and
  //             applying gold leaf & patina's to his artwork. He considers himself
  //             to essentially be self-taught and is proud of his development.
  //           </p>
  //         </div>
  //       )}

  //       <div className={styles.accordion} onClick={artistClicker}>
  //         <p className={styles.artistName}>Artist Name </p>
  //       </div>

  //       {artistWasClicked && (
  //         <div className={styles.accordionContent}>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus
  //           dolor eu ipsum ornare laoreet. Aenean tempus, libero ac porta
  //           tempus, enim elit fringilla ante, vitae luctus orci elit ac erat.
  //           Sed volutpat dolor sit amet ultricies cursus. Phasellus placerat,
  //           tellus porta cursus elementum, risus massa ornare nunc, fermentum
  //           commodo.{" "}
  //         </div>
  //       )}
  //     </div>
  //   </SlidingBox>
  // );
};

export default Artists;
