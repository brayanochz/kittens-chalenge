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
    }, [id])

    return (
        <main>
            {
                kitty ? (
                    <>
                        <div className='kitty-image'>
                            <img src={kitty.imageFileName} />
                        </div>
                        <div>
                            <p>{kitty.name}</p>
                            <p>{kitty.age}</p>
                            <p>{kitty.description}</p>
                            <p>{kitty.gender}</p>
                        </div>
                    </>
                ) : (
                    <p>No kitty found</p>
                )
            }
        </main>
    );
};

export default KittyDetails;