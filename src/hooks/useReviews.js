import { useEffect, useState } from "react";

const useReviews = function () {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://agile-garden-36261.herokuapp.com/admin/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews);
                console.log(data);
            })
    }, []);

    return reviews;
}

export default useReviews;