import React, {useEffect, useState} from 'react';
import './main-core-competencies-item.component.scss';

export type MainCoreCompetenciesItemProps = {
    imageUrl: string,
    itemTitle: string,
    itemDescription: string,
}
const MainCoreCompetenciesItemComponent: React.FC<MainCoreCompetenciesItemProps> = (props: MainCoreCompetenciesItemProps) => {
    const [isCurrent, setIsCurrent] = useState(false);
    const itemRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const handleScroll = () => {
            const itemPosition = itemRef.current?.getBoundingClientRect().top || 0;

            if (itemPosition < 800) {
                setIsCurrent(true);
            } else {
                setIsCurrent(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, [itemRef]);


    return (
        <div ref={itemRef} className={`main-core-competencies-item ${isCurrent ? 'current' : ''}`}>
            <div className="image">
                <img src={props.imageUrl} alt=""/>
            </div>
            <div className="core-competencies-item-content">
                <span className="item-title">
                    {props.itemTitle}
                </span>
                <span className="item-description">
                    {props.itemDescription}
                </span>
            </div>
        </div>
    );
};

export default MainCoreCompetenciesItemComponent;
