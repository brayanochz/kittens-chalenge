import { useEffect } from 'react';
import { useKittens } from '../hooks/useKittens';
import { Link } from 'react-router-dom';

const KittyList = () => {

    const { getKittens, kittens } = useKittens()

    useEffect(() => {
        getKittens()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return kittens.length <= 0 ? (
        <p>No kittens</p>
    ) : (
        <ul>
            {kittens.map((kitten) => (
                <li>
                    <Link to={`/${kitten.id}`} key={kitten.id}>{kitten.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default KittyList;