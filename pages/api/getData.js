import Butter from "buttercms";
const butter = Butter('eabb7d00a1cecacc7a57f771cc86fb0126ad94d8')

export async function getPage(pageName) {
    const homePage = await butter.page.retrieve('*', pageName)
    return homePage.data.data
}