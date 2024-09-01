import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        //fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
        .then((responce) => responce.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []) // App 이 render 될따 딱 한번만 실행된다. 

    useEffect(() => {
        console.log(coins);
    }, [coins])
    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? <strong>Loading...</strong> : (
                <div>
                <strong>we have {coins.length} coins</strong>
                <br></br>
                <select>
                    <option></option>
                    {coins.map((coin) => (
                        <option>
                            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                        </option>))}
                </select>
                </div>)}     
            {/* <ul>
                {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
            </ul> */}
        </div>);
}

export default App;