package edu.miu;


import java.util.ArrayList;
import java.util.List;

import static java.lang.Integer.parseInt;

public class Quiz {
    List <Question> questionArrayList = new ArrayList<>(5);
    int score;
    int count;

    public Quiz(){
        questionArrayList.add(new Question("[3, 1, 4, 1, 5, ? ]","9"));
        questionArrayList.add(new Question("[1, 1, 2, 3, 5, ? ]","8"));
        questionArrayList.add(new Question("[1, 4, 9, 16, 25, ? ]","36"));
        questionArrayList.add(new Question("[2, 3, 5, 7, 11, ? ]","13"));
        questionArrayList.add(new Question("[1, 2, 4, 8, 16, ? ]","32"));
    }

    public Boolean isCorrect(String questionAnswer){
            if(questionAnswer.equals(questionArrayList.get(count).getAnswer())){
                count ++;
                return true;
            }else {
                return false;
            }
    }
    public int getNumQuestions(){
        return  questionArrayList.size();
    }

    public int getNumCorrect(){
        return score;
    }
    public void scoreAnswer(){
        score++;
    }
    public String getCurrentQuestion(){
        return questionArrayList.get(getNumCorrect()).getQuestion();
    }
    public int getCurrentQuestionIndex(){

        return questionArrayList.indexOf(questionArrayList.get(getNumCorrect()));
    }

}
