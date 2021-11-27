import React,{ useState, useEffect} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView, } from 'react-native';
import CardContent from '../../components/CardContent';
import CustomHeader from '../../components/CustomHeader';
import { CustomFlatList } from '../../styles/styles'

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
        <View>
                <CustomHeader />
                {articles === null ? 
                <ActivityIndicator size='large'/> :
                <CustomFlatList
                    data={articles}
                    renderItem={({item,index}) =>(
                        <CardContent heading={item.source.name} subtitle={item.title} paragraph={item.description} link={item.url}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                /> 
                }
        </View>
    );
}

export default Home;