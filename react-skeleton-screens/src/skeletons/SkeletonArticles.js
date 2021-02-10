import  React  from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";


const SkeletonArticles = ({ theme }) =>{
    const themeClass =  theme || 'light';

    return(
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div>
    )
}
export default SkeletonArticles;