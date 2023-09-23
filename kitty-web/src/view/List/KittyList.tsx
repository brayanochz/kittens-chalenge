import { useEffect } from 'react';
import { useKittens } from '../../hooks/useKittens';
import Card from '../../components/card/Card';
import './index.css';

const KittyList = () => {

    const { getKittens, kittens } = useKittens()

    useEffect(() => {
        getKittens()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return kittens.length <= 0 ? (
        <p>No kittens</p>
    ) : (
        <section className='list'>
            {kittens.map((kitty) => (
                <Card kitty={kitty} />
            ))}
        </section>
    );
};

export default KittyList;