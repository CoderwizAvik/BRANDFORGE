from models import PredictionInput


# ===============================
# AI Engagement Prediction
# ===============================

def predict_engagement(data: PredictionInput):

    score = (
        data.likes * 0.4 +
        data.comments * 0.3 +
        data.shares * 0.3
    )


    engagement = (
        score / (data.followers + 1)
    ) * 100


    if engagement >= 10:

        prediction = "High Engagement"
        confidence = "90%"
        suggestion = (
            "Continue creating educational "
            "and valuable content."
        )


    elif engagement >= 5:

        prediction = "Medium Engagement"
        confidence = "75%"
        suggestion = (
            "Improve hashtags and posting consistency."
        )


    else:

        prediction = "Low Engagement"
        confidence = "60%"
        suggestion = (
            "Create more interactive content."
        )



    return {

        "predicted_engagement": round(engagement, 2),

        "prediction": prediction,

        "confidence": confidence,

        "suggestion": suggestion

    }



# ===============================
# Best Posting Time Prediction
# ===============================

def best_time(data: PredictionInput):


    if 6 <= data.posting_hour <= 10:

        return {

            "time": "Morning (6 AM - 10 AM)",

            "reason": 
            "Audience activity is high in morning."

        }


    elif 18 <= data.posting_hour <= 22:

        return {

            "time": "Evening (6 PM - 10 PM)",

            "reason":
            "Most followers are active during evening."

        }


    else:

        return {

            "time": "7:00 PM",

            "reason":
            "Recommended time based on audience activity."

        }