import DisplayItem from "./DisplayItem";
import More from "../more/More";

export default function DisplayList(props) {
    const { items } = props;
    const columns = 3;
    const columnItems = [];
    for (let i = 0; i < columns; i++) {
        columnItems.push([]);
    }
    for (let i = 0; i < items.length; i++) {
        columnItems[i % columns].push(items[i]);
    }

    return (
        <div>
            <div className="grid grid-cols-3 p-[60px] bg-[color:var(--client-display-list-bg-color)]">
                {columnItems.map((column, index) => {
                    return (
                        <div className="col-span-1 p-[10px]" key={index}>
                            {column.map((item, index2) => {
                                return (
                                    <div
                                        className="col-span-1 p-[10px]"
                                        key={index2}
                                    >
                                        <DisplayItem
                                            id={item.id}
                                            category={item.category.name}
                                            title={item.title}
                                            description={item.content}
                                            image={item.image}
                                            date={item.date}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <More />
        </div>
    );
}
