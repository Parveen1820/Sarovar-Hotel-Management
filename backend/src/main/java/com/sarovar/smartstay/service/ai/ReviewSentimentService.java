package com.sarovar.smartstay.service.ai;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class ReviewSentimentService {

    public SentimentResult analyzeReview(String reviewText) {
        String lowerReview = reviewText.toLowerCase();
        
        String sentiment = "NEUTRAL";
        int score = 0;
        
        // Lightweight keyword-based sentiment classification
        String[] positiveWords = {"clean", "great", "excellent", "helpful", "good", "amazing", "friendly"};
        String[] negativeWords = {"dirty", "bad", "terrible", "rude", "poor", "awful", "late"};
        
        for (String word : positiveWords) {
            if (lowerReview.contains(word)) score++;
        }
        for (String word : negativeWords) {
            if (lowerReview.contains(word)) score--;
        }
        
        if (score > 0) sentiment = "POSITIVE";
        else if (score < 0) sentiment = "NEGATIVE";
        
        // Topic extraction
        List<String> topics = new ArrayList<>();
        if (lowerReview.contains("room") || lowerReview.contains("bed")) topics.add("ROOM");
        if (lowerReview.contains("food") || lowerReview.contains("restaurant") || lowerReview.contains("breakfast")) topics.add("FOOD");
        if (lowerReview.contains("staff") || lowerReview.contains("service") || lowerReview.contains("reception")) topics.add("STAFF");
        if (lowerReview.contains("clean") || lowerReview.contains("dirty")) topics.add("CLEANLINESS");
        
        return new SentimentResult(sentiment, topics);
    }
    
    public static class SentimentResult {
        public String sentiment;
        public List<String> topics;
        
        public SentimentResult(String sentiment, List<String> topics) {
            this.sentiment = sentiment;
            this.topics = topics;
        }
    }
}
