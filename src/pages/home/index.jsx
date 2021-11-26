import React,{ useState, useEffect} from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import CardContent from '../../components/CardContent';
import CustomHeader from '../../components/CustomHeader';

function Home(){
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=b93c26769490437aa2e5b671a66abadc")
        .then((response) => response.json())
        .then((responseJson) => {
            setArticles(responseJson.articles)
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    return(
        <>
            <CustomHeader />
            {articles === null ? 
            <ActivityIndicator size="medium"/> :
            <FlatList
                data={articles}
                renderItem={({item,index}) =>(
                    <CardContent heading={item.source.name} subtitle={item.title} paragraph={item.description} link={item.url}/>
                )}
                keyExtractor={(item, index) => index.toString()}
            /> 
            }
            
        </>
    );
}

export default Home;