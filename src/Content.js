import ItemList from './ItemList'


const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />
            ) : (
                <p>There are no items :(</p>
            )}

        </main >
    )
}

export default Content