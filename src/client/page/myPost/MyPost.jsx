import { useState, useEffect } from "react";
import { formatMessage } from "../../Client";
import book1 from "../../../test/book1.jpg";
import book2 from "../../../test/book2.jpg";
import book3 from "../../../test/book3.jpg";
import bookrow from "../../images/bookaholic-logo.png";
import MyPostItem from "./MyPostItem";
import { getMyPost } from "./api";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";

export default function MyPost() {
    const dispatch = useDispatch();
    const [items, setItems] = useState([
        {
            id: "1",
            category: "art",
            title: "Artifice",
            description:
                'A dramatic story of duplicity and resistance, betrayal and loyalty, set against the backdrop of World War II, by the #1 New York Times bestselling author of The Light in Hidden Places. Isa de Smit was raised in the vibrant, glittering world of her parents\' small art gallery in Amsterdam, a hub of beauty, creativity, and expression, until the Nazi occupation wiped the color from her city\'s palette. The "degenerate" art of the Gallery de Smit is confiscated, the artists in hiding or deported, her best friend, Truus, fled to join the shadowy Dutch resistance. And masterpiece by masterpiece, the Nazis are buying and stealing her country’s heritage, feeding the Third Reich\'s ravenous appetite for culture and art. So when the unpaid taxes threaten her beloved but empty gallery, Isa decides to make the Nazis pay. She sells them a fake--a Rembrandt copy drawn by her talented father--a sale that sets Isa perilously close to the second-most hated class of people in the city: the collaborators. Isa sells her beautiful forgery to none other than Hitler himself, and on the way to the auction, discovers that Truus is part of a resistance ring to smuggle Jewish babies out of Amsterdam. But Truus cannot save more children without money. A lot of money. And Isa thinks she knows how to get it. One more forgery, a copy of an exquisite Vermeer, and the Nazis will pay for the rescue of the very children they are trying annihilate. To make the sale, though, Isa will need to learn the art of a master forger, before the children can be deported, and before she can be outed as a collaborator. And she finds an unlikely source to help her - the young Nazi soldier, a blackmailer and thief of Dutch art, who now says he wants to desert the German army. Yet, worth is not always seen from the surface, and a fake can be difficult to spot. Both in art, and in people. Based on the true stories of Han Van Meegeren, a master art forger who sold fakes to Hermann Goering, and Johann van Hulst, credited with saving 600 Jewish children from death in Amsterdam, Sharon Cameron weaves a gorgeously evocative thriller, simmering with twists, that looks for the forgotten color of beauty, even in an ugly world. "War, resistance, and art are Cameron\'s canvas; her palette is a balance of trust and perfidy, beauty and defiance, new life and old. Artifice is a vibrantly-hued and many-layered story, exploring our very human inability to spot a fake when we long to believe that the object of all our desire is the real thing." -- Elizabeth Wein, New York Times bestselling author of Code Name Verity "Painterly prose...filled with rich intrigue depicts constantly shifting issues of trust in this complex, absorbing tale." -- Publishers Weekly, starred review',
            image: book1,
            date: "Monday, 12 July 2021",
        },
        {
            id: "2",
            category: "business",
            title: "The Fund: Ray Dalio, Bridgewater Associates, and the Unraveling of a Wall Street Legend",
            description:
                "The unauthorized, unvarnished story of famed Wall Street hedge-fund manager Ray Dalio. Ray Dalio does not want you to read this book. Late last year, when the billionaire founder of Bridgewater Associates, the largest hedge fund on the planet, announced that he was stepping down from the company he started out of his apartment nearly 50 years ago, the news made headlines around the world. Dalio cultivated an aura of international admiration and fame thanks to his company’s eye-popping success, coupled with a mystique he encouraged with frequent media appearances, celebrity hobnobbing, and his bestselling book, Principles . In The Fund , award-winning New York Times journalist Rob Copeland punctures this carefully-constructed narrative of the benevolent business titan, exposing his much-promoted “principles” as one of the great feats of hubris in modern memory―in practice, they encouraged a toxic culture of paranoia and backstabbing. The Fund is a page-turning, stranger-than-fiction journey into a rarefied world of wealth and power. It offers an unflinching look at the pain so often caused by the “radical transparency” Dalio has described as a core tenet of his recipe for business success and a meaningful life. Drawing on hundreds of interviews with those inside and around the firm, Copeland takes readers into the room as former FBI director Jim Comey kisses Dalio's ring, recent Pennsylvania Senate candidate David McCormick drinks the Kool-Aid, and a rotating cast of memorable characters grapple with their personal psychological and moral limits―all under the watchful eye of their charismatic leader. This is a cautionary tale for anyone convinced that the ability to make lots of money has anything at all to do with unlocking the principles of human nature.",
            image: book2,
            date: "Monday, 12 July 2021",
        },
        {
            id: "3",
            category: "Christian",
            title: "Just Once",
            description:
                "The #1 New York Times bestselling author “known for her deeply heartfelt novels” (Woman’s World) writes a sweeping and unforgettable World War II love story about a young woman torn between two brothers. In 1941, beautiful Irvel Ellis is too focused on her secret to take much notice in the war raging overseas. She’s dating Sam but in love with his brother, Hank, and Irvel has no idea how to break the news when the unthinkable happens—Pearl Harbor is attacked. With their lives turned upside down overnight, Sam is drafted, and Hank wants to enlist. But Sam insists Hank stay home, where he and Irvel take up the battle on the home front. While Sam fights in Europe, an undeniable chemistry builds between Irvel and Hank but neither would dare cross that line. Then a telegram comes, and the news is devastating. Hank enlists the next day and has just two weeks until he ships out. Will either brother make it home alive? Or will Irvel lose everything? And can love find a way, even from the ashes of the greatest heartbreak?",
            image: book3,
            date: "Monday, 12 July 2021",
        },
        {
            id: "4",
            category: "art",
            title: "title4",
            description: "description4",
            image: bookrow,
            date: "date4",
        },
        {
            id: "5",
            category: "art",
            title: "title5",
            description: "description5",
            image: bookrow,
            date: "date5",
        },
        {
            id: "6",
            category: "art",
            title: "title6",
            description: "description6",
            image: bookrow,
            date: "date6",
        },
    ]);

    useEffect(() => {
        dispatch(startLoading());
        getMyPost().then((res) => {
            if (res)
                setItems(res);
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, [])

    function displayItem() {
        items.map((item, index) => {
            return (
                <MyPostItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    date={item.date}
                    category={item.category}
                />
            );
        });
    }

    return (
        <div className="p-[60px] px-[200px] bg-[color:var(--client-display-list-bg-color)]">
            <div className="pb-[60px] font-bold text-2xl">
                {formatMessage("myPost.myPost")}
            </div>
            <div>
                {items.map((item, index) => {
                    return (
                        <MyPostItem
                            key={index}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            date={item.date}
                            category={item.category}
                        />
                    );
                })}
            </div>
        </div>
    );
}
