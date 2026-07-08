from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


from analytics import calculate_growth, best_post
from predictor import predict_engagement, best_time
from strategy import generate_strategy


from models import (
    GrowthData,
    PostList,
    PredictionInput,
    StrategyInput
)


from database import (
    company,
    growth,
    best_post as best_post_data,
    prediction,
    best_time as best_time_data,
    strategy,
    event,
    launch,
    applications,
    social,
    summary
)



# ==================================
# FastAPI App
# ==================================

app = FastAPI(
    title="BrandForge AI",
    description="AI Personal Brand Marketing Dashboard",
    version="4.0"
)



# ==================================
# Static & Templates
# ==================================

app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)


templates = Jinja2Templates(
    directory="templates"
)



# ==================================
# HTML Pages
# ==================================

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "request": request
        }
    )



@app.get("/company-page", response_class=HTMLResponse)
async def company_page(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="company.html",
        context={
            "request": request
        }
    )



@app.get("/growth-page", response_class=HTMLResponse)
async def growth_page(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="growth.html",
        context={
            "request": request
        }
    )



@app.get("/social-page", response_class=HTMLResponse)
async def social_page(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="social.html",
        context={
            "request": request
        }
    )



@app.get("/strategy-page", response_class=HTMLResponse)
async def strategy_page(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="strategy.html",
        context={
            "request": request
        }
    )



@app.get("/launch-page", response_class=HTMLResponse)
async def launch_page(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="launch.html",
        context={
            "request": request
        }
    )



@app.get("/applications-page", response_class=HTMLResponse)
async def applications_page(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="applications.html",
        context={
            "request": request
        }
    )



# ==================================
# Health
# ==================================

@app.get("/health")
async def health():

    return {
        "status":"Running",
        "message":"BrandForge AI Running Successfully"
    }




# ==================================
# API Routes
# ==================================

@app.get("/api/company")
async def get_company():

    return company



@app.get("/api/company-growth")
async def get_growth():

    return growth



@app.get("/api/social")
async def get_social():

    return social



@app.get("/api/events")
async def get_events():

    return event



@app.get("/api/launch")
async def get_launch():

    return launch



@app.get("/api/applications")
async def get_applications():

    return applications



@app.get("/api/summary")
async def get_summary():

    return summary




# ==================================
# Complete Dashboard API
# ==================================

@app.get("/dashboard")
async def dashboard():

    return {

        "company": company,

        "growth": growth,

        "best_post": best_post_data,

        "prediction": prediction,

        "best_time": best_time_data,

        "strategy": strategy,


        "event":{
            "name":event["latest_event"],
            "date":event["date"],
            "status":event["status"]
        },


        "launch":{
            "product":launch["product_name"],
            "downloads":launch["downloads"],
            "revenue":launch["revenue"]
        },


        "applications":applications,


        "social":social,


        "summary":summary

    }




# ==================================
# AI Routes
# ==================================

@app.post("/growth")
async def growth_ai(data: GrowthData):

    return calculate_growth(data)



@app.post("/top-post")
async def top_post_ai(data: PostList):

    return best_post(data)



@app.post("/predict")
async def predict_ai(data: PredictionInput):

    return predict_engagement(data)



@app.post("/best-time")
async def best_time_ai(data: PredictionInput):

    return best_time(data)



@app.post("/strategy")
async def strategy_ai(data: StrategyInput):

    return generate_strategy(data)




# ==================================
# Statistics
# ==================================

@app.get("/stats")
async def stats():

    return {

        "followers":company["followers"],

        "posts":company["total_posts"],

        "employees":company["employees"],

        "engagement":company["engagement_rate"]

    }




# ==================================
# Version
# ==================================

@app.get("/version")
async def version():

    return {

        "application":"BrandForge AI",

        "version":"4.0",

        "developer":"BrandForge AI Team"

    }