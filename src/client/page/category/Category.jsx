import { getCategory } from "./api/index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatMessage } from "../../Client";
import DisplayList from "../../components/displayItem/DisplayList";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../slices/LoadingSlice";
import book1 from "../../../test/book1.jpg";
import book4 from "../../../test/book4.jpg";
import book5 from "../../../test/book5.jpg";

export default function Category() {
    const dispatch = useDispatch();
    const { category } = useParams();
    const [categoryItems, setCategoryItems] = useState([
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
            id: "4",
            category: "art",
            title: "Tylko one. Polska sztuka bez mężczyzn",
            description:
                "Wybitne i podziwiane, ale też nieodkryte i zapomniane. Artystki, bez których nie byłoby polskiej sztuki. Kobiety są przywódczyniami krajów, architektkami, pracują naukowo, prowadzą ciężarówki i latają w kosmos. Jednak ich dzieła stanowią ledwie ułamek zbiorów najważniejszych muzeów. Tymczasem kobiety zajmują się sztuką co najmniej od antyku. Od początku było ich znacznie mniej niż artystów mężczyzn, deprecjonowano ich działalność, prawo kazało im podporządkować się ojcu czy mężowi. Ale tworzyły równolegle z mężczyznami. Przełom nastąpił pod koniec XIX wieku, gdy kobietom dano dostęp do edukacji artystycznej. Do dziś każda musi utorować sobie drogę w zdominowanym przez mężczyzn świecie. Ich upór i wytrwałość mogą być inspiracją dla innych.",
            image: book4,
            date: "Monday, 12 July 2021",
        },
        {
            id: "5",
            category: "art",
            title: "Lost in America: Photographing the Last Days of our Architectural Treasures",
            description:
                "Lost in America documents the life and death of America's architectural and historic treasures. The book is based on a remarkable archive created by the Historic American Building Survey (HABS), a Works Progress Administration project that still documents the nation's most important buildings. Lost in America focuses on 100 buildings that have been torn down over the past 90 years. Some―like New York's Penn Station and Chicago's Stock Exchange―were majestic. Others―like a tiny bridge in rural Montana and a small farmstead torn down for Denver's International Airport―were modest. But they all reflected America's story before they were razed. Using haunting black-and-white images by the nation’s top architectural photographers, the book presents a timely look at what we’ve lost.",
            image: book5,
            date: "Monday, 12 July 2021",
        },
    ]);

    useEffect(() => {
        dispatch(startLoading());
        getCategory(category).then((res) => {
            if (res) {
                setCategoryItems(res.data);
            }
        });
        setTimeout(() => {
            dispatch(stopLoading());
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col bg-[color:var(--client-display-list-bg-color)]">
            <div className="uppercase flex justify-center mt-[60px] font-bold text-lg">
                <div className="border-b border-[color:var(--client-category-border-color)]">
                    {formatMessage("category.category")}
                    {": " + category}
                </div>
            </div>
            <DisplayList items={categoryItems} />
        </div>
    );
}
