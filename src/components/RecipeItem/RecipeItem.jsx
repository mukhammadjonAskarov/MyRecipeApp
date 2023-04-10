import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from './Styles.module.scss'
export default function RecipeItem() {
    const [state, setState] = useState({})
    const [searchParams] = useSearchParams()
    console.log("searchParams", searchParams.get('id'))
    useEffect(() => {
        axios
          .get(`http://localhost:3000/recipes/1`)
          .then((res) => setState(res.data))
          .catch((err) => console.log(err));
      }, []);

      console.log('state', state)
    return (
        <div>
            <img src={state.src}/>
            <div className={styles.container}>
                <h2>{state.title}</h2>
                <p>{state.description}</p>
            </div>
        </div>
    )
}