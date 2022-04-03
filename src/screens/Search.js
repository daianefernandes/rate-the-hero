import { Button } from '../commom-components/Button/Button'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { SearchField } from '../commom-components/SearchField/SearchField'

export function Search() {
    return (
        <>
            <SearchField placeholder="Digite o nome de um herói ou heroína" />
            <Button>Buscar</Button>
            <div>
                <HeroCard />
            </div>
        </>
    );
}