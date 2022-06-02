import {StyleSheet, Text, View, ImageBackground,ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FancyAlerts from '../components/FancyAlert';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Paper = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [selected, setSelectedOption] = useState('');
  const [popmsg, setPopMessage] = useState('');
  const [total,setTotal]=useState(0);
  const [correct,setCorrect]=useState(0);
  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    await axios
      .get('https://the-trivia-api.com/api/questions?limit=1')
      .then(response => {
        setQuestion(response.data[0].question);
        setCategory(response.data[0].category);
        setOptions(response.data[0].incorrectAnswers);
        // console.log(response.data[0].correctAnswer);

        setOptions(oldArray => [...oldArray, response.data[0].correctAnswer]);
    

        setAnswer(response.data[0].correctAnswer);
      })
      .catch(error => console.log(error));
  };
  const checkAns = selectedOption => {
    setSelectedOption(selectedOption);
  };
  const toggleAlert = () => {
    const msg=<Text>Correct: {correct},Total: {total}, %: {correct/total*100}%</Text>
    setPopMessage(msg)
    setVisible(!visible);
  };
  
  const backToHome=()=>{
    setVisible(!visible);
    navigation.navigate('Home')

  }
  const checkSelectOption = () => {
    if (selected === answer){
      setCorrect(correct+1)
    }
    setTotal(total+1)
    fetchQuiz();
  };
  const RenderOptions = () => {
    options.sort();
    return (
      <View style={styles.top}>
        {options.map((option, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => checkAns(option)}>
              <Text
                style={
                  selected === option ? styles.selectedStyle : styles.txtOption
                }>
                {++index}: {option}
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity onPress={checkSelectOption} style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.paperContainer}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTxt}>
          {category.length > 0 && category}
        </Text>
      </View>

      <View>
        <Text style={styles.questionCategory}>
          Q1: {question.length > 0 && question}
        </Text>
      </View>
      <ScrollView>
      <RenderOptions />
      </ScrollView>
      <View style={styles.imgContainer}>
        <ImageBackground
          style={styles.bgImg}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/boy-giving-online-test-4438985-3726680.png',
          }}></ImageBackground>
      </View>
      <View>
        <FancyAlerts
          visible={visible}
          alertText={popmsg}
          backToHome={backToHome}
        />
      </View>
      <View style={styles.thirdContainer}>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txtColor}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleAlert} style={styles.footer}>
          <Text style={styles.txtColor}>Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Paper;

const styles = StyleSheet.create({
  paperContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  submitBtn: {
    backgroundColor: '#fb5607',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
  },
  questionCategory: {
    color: '#fb5607',
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a759f',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  selectedStyle: {
    color: 'red',
  },
  categoryTxt: {
    fontSize: 20,
    color: 'white',
  },
  bgImg: {
    width: 400,
    height: 230,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },

  txtQuestion: {
    color: '#ffb703',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
  },
  alertTextColor: {
    color: 'black',
  },
  txtColor: {
    color: 'white',
    backgroundColor: '#1a759f',
    fontSize: 13,
    padding: 7,
    borderRadius: 10,
  },
  txtOption: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    padding: 13,
  },
  top: {
    flex: 2,
  },
  thirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});
