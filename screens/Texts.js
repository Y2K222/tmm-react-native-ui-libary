import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Seperator from "../components/lines/Seperator";
import ListText from "../components/texts/ListText";
import Title from "../components/texts/Title";
import TitleLabel from "../components/texts/TitleLabel"
import PrimaryButtonText from "../components/texts/PrimaryButtonText";
import FooterText from "../components/texts/FooterText";
import LinkText from "../components/texts/LinkText";
import CardHeader from "../components/texts/CardHeader";

const Texts = () => {
  return (
    <ScrollView style={styles.container}>
        <Title 
            title       ="Main Title" 
            content     ="WELCOME USER HEADER" 
            contentMM   ="အသုံးပြုသူများအား ကြိုဆိုပါသည်" 
        />
        <Seperator />
        <TitleLabel 
            title       ="Subtitle" 
            content     ="Please scan the QR code at the back of the iNteli device.
                        If you have trouble scanning with QR code, you can use deviceID 
                        to add device to your account." 
            contentMM   ="ယခု စာမျက်နှာ သည် Lorem ipsum များကို မြန်မာ Version အနေနဲ့ ထုတ်ပေးထားခြင်းဖြစ်ပါသည်။ 
                        စာပိုဒ် (၅) ပိုဒ်ပါ၀င်ပြီး စာပိုဒ် တစ်ခုချင်းစီတွင် ၀ါကျ (၅) ခုမှ (၆) အထိပါ၀င်ပါသည်။ စာလုံးတိုင်းတွင် 
                        လူသုံးနည်းသော ပါဠိ စာတစ်၀က် နှင့် လူသုံးများသော မြန်မာစာ တစ်၀က် ပါ၀င် ပါသည်။ ပါ၀င်သော ပါဠိစာများသည် 
                        ပုံမှန် စာဖတ်သူများ အတွက် ဖတ်ရှုရန် ခက်ခဲသော စာများဖြစ်စေပါသည်။ pseudo-sentence စာများကို generate လုပ်သည့် 
                        အဆင့် တစ်ဆင့်စီကို အောက်ပါစာပိုဒ်တွင် ဖော်ပြထားပါသည်။"
        />
        <Seperator />
        <ListText
            title       ="List Text"
            content     ="Protect Your Family Members"
            contentMM   ="မိသားစုဝင်များအား ကာကွယ်ပါ"
        />
        <Seperator />
        <PrimaryButtonText
            title       ="Primary Button Text"
            content     ="CONTINUE WITH PHONE"
            contentMM   ="ဖုန်းနံပါတ်ဖြင့် သုံးမည်"
        />
        <Seperator />
        <FooterText
            title       ="Footer Text"
            content     ="copyrights @2022 Techmation Myanmar"
            contentMM   ="Techmation Myanmar မှထုတ်လုပ်သည်"
        />
        <Seperator />
        <LinkText
            title       ="Link Text"
            content     ="Resend The Code?"
            contentMM   ="ကုဒ်ပြန်ပို့ဖို့ လိုပါသလား?"
        />
        <Seperator />
        <CardHeader
            title       ="Card Header"
            content     ="John Doe's Device"
        />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container : {
      flex              : 1,
      paddingHorizontal : 10,
      paddingTop        : 30,
      paddingBottom     : 100
    }
  });

export default Texts;
