import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useKittens } from '../../hooks/useKittens';

const KittyDetails = () => {

    const { id } = useParams();
    const { getKitty, kitty } = useKittens()

    useEffect(() => {
        if (!id) return
        getKitty(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return (
        <div>
            {
                kitty ? (
                    <div>
                        <img src={kitty.imageFileName} />
                        <p>{kitty.name}</p>
                        <p>{kitty.age}</p>
                    </div>
                ) : (
                    <p>No kitty</p>
                )
            }
            <p>Details {id}</p>
        </div>
    );
};

export default KittyDetails;