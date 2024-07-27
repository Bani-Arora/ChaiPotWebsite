import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs"
import nodemailer from 'nodemailer'
import Otp from "../Models/otp.model.js";
import dotenv from "dotenv"
dotenv.config();


  const mailTransport = nodemailer.createTransport({    
    host: "smtpout.secureserver.net",  
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth: {
        user: process.env.GodaddyUser,
        pass: process.env.GodaddyPass
    }
});

export const signUp= async (req,res)=>{
    try {
        const {firstName, lastName, email, phoneNo, password} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"Email already exists"})
        }
        const hashedPassword = await bcryptjs.hash(password,10)
        const createdUser = new User({
            firstName : firstName,
            lastName : lastName,
            email : email,
            phoneNo : phoneNo,
            password : hashedPassword
        })
        await createdUser.save()
        const mailOptions = {
            from: process.env.GodaddyUser,
            to: email,
            subject: "Welcome to Chai Pot!",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                        <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

                        <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <!--[if !mso]><!-- -->
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <!--<![endif]-->
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="format-detection" content="telephone=no" />
                        <meta name="format-detection" content="date=no" />
                        <meta name="format-detection" content="address=no" />
                        <meta name="format-detection" content="email=no" />
                        <meta name="x-apple-disable-message-reformatting" />
                        <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,300;0,400;0,800" rel="stylesheet" />
                        <title>Untitled</title>
                        <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
                        <!--[if !mso]><!-- -->
                        <style>
                        @media  all {
                                                            /* cyrillic-ext */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 300;
                                        font-display: swap;
                                        src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreSxf6Xl7Gl3LX.woff2) format('woff2');
                                        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                    }
                                    /* cyrillic */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 300;
                                        font-display: swap;
                                        src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreQhf6Xl7Gl3LX.woff2) format('woff2');
                                        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                    }
                                    /* latin-ext */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 300;
                                        font-display: swap;
                                        src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreSBf6Xl7Gl3LX.woff2) format('woff2');
                                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                    }
                                    /* latin */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 300;
                                        font-display: swap;
                                        src: local('Fira Sans Light'), local('FiraSans-Light'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6Xl7Glw.woff2) format('woff2');
                                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                    }
                                                            /* cyrillic-ext */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 400;
                                        src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                                        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                    }
                                    /* cyrillic */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 400;
                                        src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                                        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                    }
                                    /* latin-ext */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 400;
                                        src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                    }
                                    /* latin */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 400;
                                        src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                    }
                                                                                    /* cyrillic-ext */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 800;
                                        font-display: swap;
                                        src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                                        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                    }
                                    /* cyrillic */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 800;
                                        font-display: swap;
                                        src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                                        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                    }
                                    /* latin-ext */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 800;
                                        font-display: swap;
                                        src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                    }
                                    /* latin */
                                    @font-face {
                                        font-family: 'Fira Sans';
                                        font-style: normal;
                                        font-weight: 800;
                                        font-display: swap;
                                        src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                    }
                                            }
                        </style>
                        <!--<![endif]-->
                        <style>
                        html,
                                body {
                                    margin: 0 !important;
                                    padding: 0 !important;
                                    min-height: 100% !important;
                                    width: 100% !important;
                                    -webkit-font-smoothing: antialiased;
                                }
                        
                                * {
                                    -ms-text-size-adjust: 100%;
                                }
                        
                                #outlook a {
                                    padding: 0;
                                }
                        
                                .ReadMsgBody,
                                .ExternalClass {
                                    width: 100%;
                                }
                        
                                .ExternalClass,
                                .ExternalClass p,
                                .ExternalClass td,
                                .ExternalClass div,
                                .ExternalClass span,
                                .ExternalClass font {
                                    line-height: 100%;
                                }
                        
                                table,
                                td,
                                th {
                                    mso-table-lspace: 0 !important;
                                    mso-table-rspace: 0 !important;
                                    border-collapse: collapse;
                                }
                        
                                u + .body table, u + .body td, u + .body th {
                                    will-change: transform;
                                }
                        
                                body, td, th, p, div, li, a, span {
                                    -webkit-text-size-adjust: 100%;
                                    -ms-text-size-adjust: 100%;
                                    mso-line-height-rule: exactly;
                                }
                        
                                img {
                                    border: 0;
                                    outline: 0;
                                    line-height: 100%;
                                    text-decoration: none;
                                    -ms-interpolation-mode: bicubic;
                                }
                        
                                a[x-apple-data-detectors] {
                                    color: inherit !important;
                                    text-decoration: none !important;
                                }
                        
                                .pc-gmail-fix {
                                    display: none;
                                    display: none !important;
                                }
                        
                                .body .pc-project-body {
                                    background-color: transparent !important;
                                }
                        
                                @media (min-width: 621px) {
                                    .pc-lg-hide {
                                        display: none;
                                    } 
                        
                                    .pc-lg-bg-img-hide {
                                        background-image: none !important;
                                    }
                                }
                        </style>
                        <style>
                        @media (max-width: 620px) {
                        .pc-project-body {min-width: 0px !important;}
                        .pc-project-container {width: 100% !important;}
                        .pc-sm-hide {display: none !important;}
                        .pc-sm-bg-img-hide {background-image: none !important;}
                        table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
                        td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
                        .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
                        .pc-w620-fontSize-30 {font-size: 30px !important;}
                        .pc-w620-lineHeight-133pc {line-height: 133% !important;}
                        .pc-w620-fontSize-16 {font-size: 16px !important;}
                        .pc-w620-lineHeight-163pc {line-height: 163% !important;}
                        .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
                        .pc-w620-itemsSpacings-20-0 {padding-left: 10px !important;padding-right: 10px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
                        .pc-w620-width-30 {width: 30px !important;}
                        .pc-w620-height-auto {height: auto !important;}
                        .pc-w620-width-47 {width: 47px !important;}
                        .pc-w620-fontSize-18px {font-size: 18px !important;}
                        
                        .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
                        .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
                        .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
                        .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
                        .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
                        .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
                        .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
                        .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
                        
                        .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
                        .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
                        .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
                        .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
                        
                        .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
                        .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
                        .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
                        .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
                        .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
                        .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
                        }
                        @media (max-width: 520px) {
                        .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
                        }
                        </style>
                        <!--[if !mso]><!-- -->
                        <style>
                        @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreSBf6.woff2') format('woff2'); } }
                        </style>
                        <!--<![endif]-->
                        <!--[if mso]>
                            <style type="text/css">
                                .pc-font-alt {
                                    font-family: Arial, Helvetica, sans-serif !important;
                                }
                            </style>
                            <![endif]-->
                        <!--[if gte mso 9]>
                            <xml>
                                <o:OfficeDocumentSettings>
                                    <o:AllowPNG/>
                                    <o:PixelsPerInch>96</o:PixelsPerInch>
                                </o:OfficeDocumentSettings>
                            </xml>
                            <![endif]-->
                        </head>

                        <body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
                        <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                        <td align="center" valign="top">
                            <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                            <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
                                <tr>
                                <td valign="top">
                                <!-- BEGIN MODULE: Header 2 -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                    <td style="padding: 0px 0px 0px 0px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: separate; border-spacing: 0px;">
                                    <tr>
                                    <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; border-radius: 0px; background-color: #446418;" bgcolor="#446418">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                        <td class="pc-w620-spacing-0-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                                        <img src="https://cloudfilesdm.com/postcards/image-1721834004286.png" class="" width="138" height="138" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:138px; height: auto; max-width: 100%; border: 0;" />
                                        </td>
                                        </tr>
                                        </table>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                        <td align="center" valign="top" style="padding: 0px 0px 50px 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                            <tr>
                                            <td valign="top" align="center">
                                            <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-133pc" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #ffffff; text-align: center; text-align-last: center;">
                                            <div><span style="letter-spacing: 3.8px;" data-letter-spacing-original="3.8px">WELCOME</span>
                                            </div>
                                            </div>
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                        </tr>
                                        </table>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                        <td align="left" valign="top" style="padding: 0px 0px 29px 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                            <tr>
                                            <td valign="top" align="left">
                                            <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-163pc" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: 300; font-variant-ligatures: normal; color: #ffffff; text-align: left; text-align-last: left;">
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">Dear ${firstName} ${lastName},</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;"><br/>Thank you for joining the Chai Pot family! We&#39;re thrilled to have you with us and can&#39;t wait for you to explore all the delicious offerings we have in store. At Chai Pot, we&#39;re passionate about creating an inviting space where you can enjoy the rich, aromatic flavors of our expertly crafted chai. Each cup is brewed with care, using only the finest ingredients to bring you a truly exceptional experience.</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;"><br/>As a member of our community, you&#39;ll have access to exclusive promotions, updates on our latest offerings, and invitations to special events. We believe that chai is more than just a beverage—it&#39;s a moment of warmth and connection. We&#39;re excited to share this journey with you and look forward to making every visit to Chai Pot memorable.<br/><br/></span><span style="font-family: 'Helvetica', Arial, serif;font-weight: 700;font-style: normal;">Stay in Touch</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">If you have any questions, feel free to contact us at info@chaipot.co.in. We&#39;re here to ensure you have the best experience possible.</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">Welcome once again, and thank you for choosing Chai Pot. We look forward to serving you!</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                            </div>
                                            <div><span style="font-family: 'Helvetica', Arial, serif;">Warm regards,<br/>Team Chai Pot<br/></span>
                                            </div>
                                            </div>
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                        </tr>
                                        </table>
                                    </td>
                                    </tr>
                                    </table>
                                    </td>
                                </tr>
                                </table>
                                <!-- END MODULE: Header 2 -->
                                </td>
                                </tr>
                                <tr>
                                <td valign="top">
                                <!-- BEGIN MODULE: Footer 7 -->
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                    <td style="padding: 0px 0px 0px 0px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                    <tr>
                                    <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; background-color: #ffffff;" bgcolor="#ffffff">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                        <td align="center" style="padding: 0px 0px 20px 0px;">
                                        <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                            <tr class="pc-grid-tr-first pc-grid-tr-last">
                                            <td class="pc-grid-td-first pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                                <td align="center" valign="middle">
                                                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                                <tr>
                                                <td align="center" valign="top">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                    <tr>
                                                    <td valign="top">
                                                    <a class="pc-font-alt" href="https://www.facebook.com/p/Chai-Pot-100069293711634/" target="_blank" style="text-decoration: none;">
                                                        <img src="https://cloudfilesdm.com/postcards/f8c121e90b0402a278a21fcb1dfc7e49.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                    </a>
                                                    </td>
                                                    </tr>
                                                    </table>
                                                </td>
                                                </tr>
                                                </table>
                                                </td>
                                            </tr>
                                            </table>
                                            </td>
                                            <td class="pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                                <td align="center" valign="middle">
                                                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                                <tr>
                                                <td align="center" valign="top">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                    <tr>
                                                    <td valign="top">
                                                    <a class="pc-font-alt" href="https://www.youtube.com/channel/UCxVtF9dYeFJaGpf29qQgjxg" target="_blank" style="text-decoration: none;">
                                                        <img src="https://cloudfilesdm.com/postcards/ef780addc1ae729c7564d9844fea02e5.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                    </a>
                                                    </td>
                                                    </tr>
                                                    </table>
                                                </td>
                                                </tr>
                                                </table>
                                                </td>
                                            </tr>
                                            </table>
                                            </td>
                                            <td class="pc-grid-td-last pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                                <td align="center" valign="middle">
                                                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                                <tr>
                                                <td align="center" valign="top">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                    <tr>
                                                    <td valign="top">
                                                    <a class="pc-font-alt" href="https://www.instagram.com/chaipotofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style="text-decoration: none;">
                                                        <img src="https://cloudfilesdm.com/postcards/b31d13b76ca84bb9772c51ce4684e42a.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                    </a>
                                                    </td>
                                                    </tr>
                                                    </table>
                                                </td>
                                                </tr>
                                                </table>
                                                </td>
                                            </tr>
                                            </table>
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                        </tr>
                                        </table>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                        <td align="center" valign="top" style="padding: 0px 0px 14px 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-47" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                            <tr>
                                            <td valign="top" align="center">
                                            <a class="pc-font-alt pc-w620-fontSize-18px" href="https://chaipot.co.in" style="text-decoration: none; line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: center; text-align-last: center;">
                                            <span style="letter-spacing: 0.4px;" data-letter-spacing-original="0.4px">chaipot.co.in</span> 
                                            </a>
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                        </tr>
                                        </table>
                                    </td>
                                    </tr>
                                    </table>
                                    </td>
                                </tr>
                                </table>
                                <!-- END MODULE: Footer 7 -->
                                </td>
                                </tr>
                            </table>
                            </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                        </table>
                        <!-- Fix for Gmail on iOS -->
                        <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        </body>

                    </html>
                    `,
          };
          mailTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email: ", error);
            } else {
              console.log("Email sent: ", info.response);
            }
          });
        res.status(201).json({message:"User created Successfully",user:{
            _id: createdUser._id,
            firstName : createdUser.firstName,
            lastName : createdUser.lastName,
            email : createdUser.email
        }})

    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})
        
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid email"})
        }
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"})
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id: user._id,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                phoneNo : user.phoneNo
            }})
        }

    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})

    }
}

export const updateUser = async(req,res)=>{
    try {
        const {firstName, lastName, email, phoneNo, password} = req.body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid password"})
        }
        else{
            
            user.firstName = firstName;
            user.lastName = lastName;
            user.phoneNo = phoneNo;
            await user.save();
            res.status(200).json({message:"Updated successful",user:{
                _id: user._id,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                phoneNo : user.phoneNo
            }})
        }

    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})

    }
}

export const changePassword = async(req,res)=>{
    try {
        const {email,password, newPassword} = req.body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid password"})
        }
        else{
            
            user.password = await bcryptjs.hash(newPassword,10)
            await user.save();
            const mailOptions = {
                from: process.env.GodaddyUser,
                to: email,
                subject: "Your password has been reset!",
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,800" rel="stylesheet" />
 <title>Untitled_copy</title>
 <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
 <!--[if !mso]><!-- -->
 <style>
 @media  all {
                                                 /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                                             /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                     }
 </style>
 <!--<![endif]-->
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
 
         .pc-gmail-fix {
             display: none;
             display: none !important;
         }
 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-fontSize-30 {font-size: 30px !important;}
 .pc-w620-lineHeight-133pc {line-height: 133% !important;}
 .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
 .pc-w620-padding-10-35-10-35 {padding: 10px 35px 10px 35px !important;}
 .pc-w620-itemsSpacings-20-0 {padding-left: 10px !important;padding-right: 10px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-width-30 {width: 30px !important;}
 .pc-w620-height-auto {height: auto !important;}
 .pc-w620-width-47 {width: 47px !important;}
 .pc-w620-fontSize-18px {font-size: 18px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 @media (max-width: 520px) {
 .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
 .pc-w520-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Header 2 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: separate; border-spacing: 0px;">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 0px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                   <img src="https://cloudfilesdm.com/postcards/image-1721834004286.png" class="" width="138" height="138" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:138px; height: auto; max-width: 100%; border: 0;" />
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 50px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center">
                      <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-133pc" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #000000; text-align: center; text-align-last: center;">
                       <div><span style="color: rgb(0, 0, 0);letter-spacing: 3.8px;" data-letter-spacing-original="3.8">PASSWORD RESET</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Header 2 -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Text -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 40px 10px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                 <tr>
                  <td valign="top" align="left">
                   <div class="pc-font-alt" style="line-height: 21px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 15px; font-weight: normal; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Dear ${user.firstName} ${user.lastName},</span>
                    </div>
                    <div><span>&#xFEFF;</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">We wanted to let you know that your password for your Chai Pot account has been successfully reset. If you initiated this change, you can now log in using your new password.</span>
                    </div>
                    <div><span>&#xFEFF;</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">If you did not request a password reset, please contact us immediately at </span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">info@chaipot.co.in </span><span style="font-family: 'Helvetica', Arial, serif;">to secure your account.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;font-weight: 700;font-style: normal;">Need Help?</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">If you have any questions or encounter any issues, our support team is here to assist you. Feel free to contact us at info@chaipot.co.in.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Thank you for being a valued member of the Chai Pot community. We look forward to serving you again soon!</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Warm regards,</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Team Chai Pot</span><span style="font-family: 'Arial', Helvetica, sans-serif;"><br/></span>
                    </div>
                   </div>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Text -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer 7 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" style="padding: 0px 0px 20px 0px;">
                   <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <a class="pc-font-alt" href="https://www.facebook.com/p/Chai-Pot-100069293711634/" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/f8c121e90b0402a278a21fcb1dfc7e49.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <a class="pc-font-alt" href="https://www.youtube.com/channel/UCxVtF9dYeFJaGpf29qQgjxg" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/ef780addc1ae729c7564d9844fea02e5.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <a class="pc-font-alt" href="https://www.instagram.com/chaipotofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/b31d13b76ca84bb9772c51ce4684e42a.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 14px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-47" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center">
                      <a class="pc-font-alt pc-w620-fontSize-18px" href="https://chaipot.co.in" style="text-decoration: none; line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: center; text-align-last: center;">
                       <span style="letter-spacing: 0.4px;" data-letter-spacing-original="0.4px">chaipot.co.in</span> 
                      </a>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer 7 -->
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <!-- Fix for Gmail on iOS -->
 <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 </div>
</body>

</html>

                        `,
              };
              mailTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Error sending email: ", error);
                } else {
                  console.log("Email sent: ", info.response);
                }
              });
            res.status(200).json({message:"Password updated successful",user:{
                _id: user._id,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                phoneNo : user.phoneNo
            }})
        }

    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})

    }
}

export const deleteAccount = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid password"})
        }
        else{
            
            await User.deleteOne({email})
            const mailOptions = {
                from: process.env.GodaddyUser,
                to: email,
                subject: "Your account has been deleted!",
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,800" rel="stylesheet" />
 <title>Untitled_copy</title>
 <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
 <!--[if !mso]><!-- -->
 <style>
 @media  all {
                                                 /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 400;
                 src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                                                             /* cyrillic-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
             }
             /* cyrillic */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
             }
             /* latin-ext */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                 unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
             }
             /* latin */
             @font-face {
                 font-family: 'Fira Sans';
                 font-style: normal;
                 font-weight: 800;
                 font-display: swap;
                 src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                 unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
             }
                     }
 </style>
 <!--<![endif]-->
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
 
         .pc-gmail-fix {
             display: none;
             display: none !important;
         }
 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-fontSize-30 {font-size: 30px !important;}
 .pc-w620-lineHeight-133pc {line-height: 133% !important;}
 .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
 .pc-w620-padding-10-35-10-35 {padding: 10px 35px 10px 35px !important;}
 .pc-w620-itemsSpacings-20-0 {padding-left: 10px !important;padding-right: 10px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-width-30 {width: 30px !important;}
 .pc-w620-height-auto {height: auto !important;}
 .pc-w620-width-47 {width: 47px !important;}
 .pc-w620-fontSize-18px {font-size: 18px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 @media (max-width: 520px) {
 .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
 .pc-w520-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Header 2 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: separate; border-spacing: 0px;">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 0px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                   <img src="https://cloudfilesdm.com/postcards/image-1721834004286.png" class="" width="138" height="138" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:138px; height: auto; max-width: 100%; border: 0;" />
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 50px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center">
                      <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-133pc" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #000000; text-align: center; text-align-last: center;">
                       <div><span style="color: rgb(0, 0, 0);letter-spacing: 3.8px;" data-letter-spacing-original="3.8">ACCOUNT DELETED</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Header 2 -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Text -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 40px 10px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                 <tr>
                  <td valign="top" align="left">
                   <div class="pc-font-alt" style="line-height: 21px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 15px; font-weight: normal; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Dear ${user.firstName} ${user.lastName},</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">We wanted to let you know that your request to delete your Chai Pot account has been successfully processed. Your account and all associated data have been permanently removed from our system.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">We’re sorry to see you go and hope that your experience with us was filled with the delightful flavors and warm moments we strive to provide.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;font-weight: 700;font-style: normal;">Feedback Welcome</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Your feedback is incredibly important to us. If there’s anything we could have done better or if you have any comments you’d like to share, please let us know. We’re always looking to improve and ensure that every customer’s experience is the best it can be.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;font-weight: 700;font-style: normal;">Stay Connected</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Although your account has been deleted, you are always welcome to visit us at Chai Pot. Whether you’re craving a comforting cup of chai or simply want to enjoy our cozy atmosphere, our doors are always open to you.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">If you ever decide to return, we would be more than happy to welcome you back into the Chai Pot family. Thank you for being a part of our community.</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Warm regards,</span>
                    </div>
                    <div><span style="font-family: 'Helvetica', Arial, serif;">Team Chai Pot<br/></span>
                    </div>
                   </div>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Text -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer 7 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" style="padding: 0px 0px 20px 0px;">
                   <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <a class="pc-font-alt" href="https://www.facebook.com/p/Chai-Pot-100069293711634/" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/f8c121e90b0402a278a21fcb1dfc7e49.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <a class="pc-font-alt" href="https://www.youtube.com/channel/UCxVtF9dYeFJaGpf29qQgjxg" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/ef780addc1ae729c7564d9844fea02e5.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <a class="pc-font-alt" href="https://www.instagram.com/chaipotofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/b31d13b76ca84bb9772c51ce4684e42a.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 14px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-47" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="center">
                      <a class="pc-font-alt pc-w620-fontSize-18px" href="https://chaipot.co.in" style="text-decoration: none; line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: center; text-align-last: center;">
                       <span style="letter-spacing: 0.4px;" data-letter-spacing-original="0.4px">chaipot.co.in</span> 
                      </a>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer 7 -->
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
 <!-- Fix for Gmail on iOS -->
 <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 </div>
</body>

</html>

                        `,
              };
              mailTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Error sending email: ", error);
                } else {
                  console.log("Email sent: ", info.response);
                }
              });
            res.status(200).json({message:"Account deleted",user:{
                _id: user._id,
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                phoneNo : user.phoneNo
            }})
        }

    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})

    }
}

export const createOtp= async (req,res)=>{
    try {
        const {email} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Email not registered"})
        }
        const alreadyOtp = await Otp.findOne({email})
        if(alreadyOtp){
            await Otp.deleteOne({email})
        }
        const num = Math.floor(100000 + Math.random() * 900000)
        const createdOtp = new Otp({
            email : email,
            otp : num
        })
        await createdOtp.save()
        const mailOptions = {
            from: process.env.GodaddyUser,
            to: email,
            subject: "OTP to reset password!",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                    <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

                    <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <!--[if !mso]><!-- -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <!--<![endif]-->
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="format-detection" content="date=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="email=no" />
                    <meta name="x-apple-disable-message-reformatting" />
                    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,700;0,800" rel="stylesheet" />
                    <title>Untitled_copy</title>
                    <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
                    <!--[if !mso]><!-- -->
                    <style>
                    @media  all {
                                                                    /* cyrillic-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                }
                                /* cyrillic */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                                    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                }
                                /* latin-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                }
                                /* latin */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                }
                                                                    /* cyrillic-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 700;
                                    src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSxf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                }
                                /* cyrillic */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 700;
                                    src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                }
                                /* latin-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 700;
                                    src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                }
                                /* latin */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 700;
                                    src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
                                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                }
                                                        /* cyrillic-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                }
                                /* cyrillic */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                }
                                /* latin-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                }
                                /* latin */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                }
                                        }
                    </style>
                    <!--<![endif]-->
                    <style>
                    html,
                            body {
                                margin: 0 !important;
                                padding: 0 !important;
                                min-height: 100% !important;
                                width: 100% !important;
                                -webkit-font-smoothing: antialiased;
                            }
                    
                            * {
                                -ms-text-size-adjust: 100%;
                            }
                    
                            #outlook a {
                                padding: 0;
                            }
                    
                            .ReadMsgBody,
                            .ExternalClass {
                                width: 100%;
                            }
                    
                            .ExternalClass,
                            .ExternalClass p,
                            .ExternalClass td,
                            .ExternalClass div,
                            .ExternalClass span,
                            .ExternalClass font {
                                line-height: 100%;
                            }
                    
                            table,
                            td,
                            th {
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                border-collapse: collapse;
                            }
                    
                            u + .body table, u + .body td, u + .body th {
                                will-change: transform;
                            }
                    
                            body, td, th, p, div, li, a, span {
                                -webkit-text-size-adjust: 100%;
                                -ms-text-size-adjust: 100%;
                                mso-line-height-rule: exactly;
                            }
                    
                            img {
                                border: 0;
                                outline: 0;
                                line-height: 100%;
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                            }
                    
                            a[x-apple-data-detectors] {
                                color: inherit !important;
                                text-decoration: none !important;
                            }
                    
                            .pc-gmail-fix {
                                display: none;
                                display: none !important;
                            }
                    
                            .body .pc-project-body {
                                background-color: transparent !important;
                            }
                    
                            @media (min-width: 621px) {
                                .pc-lg-hide {
                                    display: none;
                                } 
                    
                                .pc-lg-bg-img-hide {
                                    background-image: none !important;
                                }
                            }
                    </style>
                    <style>
                    @media (max-width: 620px) {
                    .pc-project-body {min-width: 0px !important;}
                    .pc-project-container {width: 100% !important;}
                    .pc-sm-hide {display: none !important;}
                    .pc-sm-bg-img-hide {background-image: none !important;}
                    table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
                    td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
                    .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
                    .pc-w620-fontSize-30 {font-size: 30px !important;}
                    .pc-w620-lineHeight-133pc {line-height: 133% !important;}
                    .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
                    .pc-w620-itemsSpacings-0-30 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
                    .pc-w620-padding-85-20-85-20 {padding: 85px 20px 85px 20px !important;}
                    div.pc-w620-textAlign-left,th.pc-w620-textAlign-left,a.pc-w620-textAlign-left,td.pc-w620-textAlign-left {text-align: left !important;text-align-last: left !important;}
                    table.pc-w620-textAlign-left{float: none !important;margin-right: auto !important;margin-left: 0 !important;}
                    img.pc-w620-textAlign-left{margin-right: auto !important;margin-left: 0 !important;}
                    .pc-w620-width-279 {width: 279px !important;}
                    .pc-w620-height-auto {height: auto !important;}
                    .pc-w620-fontSize-14px {font-size: 14px !important;}
                    .pc-w620-lineHeight-20 {line-height: 20px !important;}
                    .pc-w620-padding-10-35-10-35 {padding: 10px 35px 10px 35px !important;}
                    .pc-w620-itemsSpacings-20-0 {padding-left: 10px !important;padding-right: 10px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
                    .pc-w620-width-30 {width: 30px !important;}
                    .pc-w620-width-47 {width: 47px !important;}
                    .pc-w620-fontSize-18px {font-size: 18px !important;}
                    
                    .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
                    .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
                    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
                    .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
                    .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
                    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
                    .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
                    .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
                    
                    .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
                    .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
                    .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
                    .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
                    
                    .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
                    .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
                    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
                    .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
                    .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
                    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
                    }
                    @media (max-width: 520px) {
                    .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
                    .pc-w520-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
                    }
                    </style>
                    <!--[if !mso]><!-- -->
                    <style>
                    @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf6.woff2') format('woff2'); } }
                    </style>
                    <!--<![endif]-->
                    <!--[if mso]>
                        <style type="text/css">
                            .pc-font-alt {
                                font-family: Arial, Helvetica, sans-serif !important;
                            }
                        </style>
                        <![endif]-->
                    <!--[if gte mso 9]>
                        <xml>
                            <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                    </head>

                    <body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
                    <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                    <td align="center" valign="top">
                        <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                        <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Header 2 -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: separate; border-spacing: 0px;">
                                <tr>
                                <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 0px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td class="pc-w620-spacing-0-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                                    <img src="https://cloudfilesdm.com/postcards/image-1721834004286.png" class="" width="138" height="138" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:138px; height: auto; max-width: 100%; border: 0;" />
                                    </td>
                                    </tr>
                                    </table>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td align="center" valign="top" style="padding: 0px 0px 50px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                        <tr>
                                        <td valign="top" align="center">
                                        <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-133pc" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #000000; text-align: center; text-align-last: center;">
                                        <div><span style="color: #000000;letter-spacing: 3.8px;" data-letter-spacing-original="3.8">YOUR OTP</span>
                                        </div>
                                        </div>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Header 2 -->
                            </td>
                            </tr>
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Content 1 -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; background-color: #FFFFFF;" bgcolor="#FFFFFF">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td>
                                    <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr class="pc-grid-tr-first pc-grid-tr-last">
                                        <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                        <tr>
                                            <td class="pc-w620-padding-85-20-85-20" align="center" valign="middle" style="padding: 30px 25px 30px 25px; background-color: #e5e5e5; border-radius: 8px;">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table class="pc-w620-width-279" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                                    <tr>
                                                    <td valign="top" class="pc-w620-textAlign-left" align="left">
                                                    <div class="pc-font-alt pc-w620-textAlign-left pc-w620-fontSize-14px pc-w620-lineHeight-20" style="line-height: 34px; letter-spacing: -0.4px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: bold; font-variant-ligatures: normal; color: #000000; text-align: left; text-align-last: left;">
                                                    <div><span style="font-family: 'Helvetica', Arial, serif;color: rgb(0, 0, 0);">Dear ${user.firstName} ${user.lastName},</span>
                                                    </div>
                                                    <div><span style="color: rgb(0, 0, 0);">﻿</span>
                                                    </div>
                                                    <div><span style="font-family: 'Helvetica', Arial, serif;color: rgb(0, 0, 0);"><br/>We received a request to reset your password for your Chai Pot account. To complete the process, please use the One-Time Password (OTP) provided below. This code is valid for the next 15 minutes.</span>
                                                    </div>
                                                    <div><span>﻿</span>
                                                    </div>
                                                    </div>
                                                    </td>
                                                    </tr>
                                                </table>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td align="center" valign="top">
                                                <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="center" style="border-collapse: separate; border-spacing: 0;">
                                                    <tr>
                                                    <td valign="top" align="center" style="padding: 20px 0px 40px 0px;">
                                                    <div class="pc-font-alt" style="line-height: 21px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 45px; font-weight: normal; font-variant-ligatures: normal; color: #000000; text-align: center; text-align-last: center;">
                                                    <div><span style="font-family: 'Helvetica', Arial, serif;color: #000000;">${num}</span>
                                                    </div>
                                                    </div>
                                                    </td>
                                                    </tr>
                                                </table>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Content 1 -->
                            </td>
                            </tr>
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Text -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 40px 10px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                    <tr>
                                    <td valign="top" align="left">
                                    <div class="pc-font-alt" style="line-height: 21px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 15px; font-weight: normal; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Please enter this code on the password reset page to proceed with updating your password. If you did not request a password reset, please ignore this email and your account will remain secure.</span>
                                        </div>
                                        <div><span>&#xFEFF;</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;font-weight: 700;font-style: normal;">Need Help?</span>
                                        </div>
                                        <div><span>&#xFEFF;</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">If you have any questions or encounter any issues, our support team is here to assist you. Feel free to contact us at info@chaipot.co.in.</span>
                                        </div>
                                        <div><span>&#xFEFF;</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Thank you for being a valued member of the Chai Pot community. We look forward to serving you again soon!</span>
                                        </div>
                                        <div><span>&#xFEFF;</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Warm regards,</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Team Chai Pot<br/></span>
                                        </div>
                                    </div>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Text -->
                            </td>
                            </tr>
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Footer 7 -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td align="center" style="padding: 0px 0px 20px 0px;">
                                    <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr class="pc-grid-tr-first pc-grid-tr-last">
                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                        <tr>
                                            <td align="center" valign="middle">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <a class="pc-font-alt" href="https://www.facebook.com/p/Chai-Pot-100069293711634/" target="_blank" style="text-decoration: none;">
                                                    <img src="https://cloudfilesdm.com/postcards/f8c121e90b0402a278a21fcb1dfc7e49.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                </a>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        <td class="pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                        <tr>
                                            <td align="center" valign="middle">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <a class="pc-font-alt" href="https://www.youtube.com/channel/UCxVtF9dYeFJaGpf29qQgjxg" target="_blank" style="text-decoration: none;">
                                                    <img src="https://cloudfilesdm.com/postcards/ef780addc1ae729c7564d9844fea02e5.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                </a>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                        <tr>
                                            <td align="center" valign="middle">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <a class="pc-font-alt" href="https://www.instagram.com/chaipotofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style="text-decoration: none;">
                                                    <img src="https://cloudfilesdm.com/postcards/b31d13b76ca84bb9772c51ce4684e42a.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                </a>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td align="center" valign="top" style="padding: 0px 0px 14px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-47" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                        <tr>
                                        <td valign="top" align="center">
                                        <a class="pc-font-alt pc-w620-fontSize-18px" href="https://chaipot.co.in" style="text-decoration: none; line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: center; text-align-last: center;">
                                        <span style="letter-spacing: 0.4px;" data-letter-spacing-original="0.4px">chaipot.co.in</span> 
                                        </a>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Footer 7 -->
                            </td>
                            </tr>
                        </table>
                        </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    </table>
                    <!-- Fix for Gmail on iOS -->
                    <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    </body>

                    </html>

                    `,
          };
          mailTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email: ", error);
            } else {
              console.log("Email sent: ", info.response);
            }
          });
        res.status(201).json({message:"OTP sent successfully",user:{
            _id: createdOtp._id,
            email : createdOtp.email,
            otp : createdOtp.otp
        }})
        setTimeout(async ()=>{
                await Otp.deleteOne({email})
        },900000)
        
    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})
        
    }
}

export const resetPassword= async (req,res)=>{
    try {
        const {email, newPassword, otp} = req.body
        const curUser = await User.findOne({email})

        if(!curUser){
            return res.status(400).json({message:"Email not registered"})
        }
        const currentUser = await Otp.findOne({email})
        if(otp == currentUser.otp ){
            
            curUser.password = await bcryptjs.hash(newPassword,10)
            await curUser.save()
            const mailOptions = {
                from: process.env.GodaddyUser,
                to: email,
                subject: "Your password has been reset!",
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                    <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

                    <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <!--[if !mso]><!-- -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <!--<![endif]-->
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="format-detection" content="date=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="email=no" />
                    <meta name="x-apple-disable-message-reformatting" />
                    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,800" rel="stylesheet" />
                    <title>Untitled_copy</title>
                    <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
                    <!--[if !mso]><!-- -->
                    <style>
                    @media  all {
                                                                    /* cyrillic-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                }
                                /* cyrillic */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                                    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                }
                                /* latin-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                }
                                /* latin */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 400;
                                    src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                }
                                                                                /* cyrillic-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                                }
                                /* cyrillic */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                                }
                                /* latin-ext */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                                    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                                }
                                /* latin */
                                @font-face {
                                    font-family: 'Fira Sans';
                                    font-style: normal;
                                    font-weight: 800;
                                    font-display: swap;
                                    src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                                }
                                        }
                    </style>
                    <!--<![endif]-->
                    <style>
                    html,
                            body {
                                margin: 0 !important;
                                padding: 0 !important;
                                min-height: 100% !important;
                                width: 100% !important;
                                -webkit-font-smoothing: antialiased;
                            }
                    
                            * {
                                -ms-text-size-adjust: 100%;
                            }
                    
                            #outlook a {
                                padding: 0;
                            }
                    
                            .ReadMsgBody,
                            .ExternalClass {
                                width: 100%;
                            }
                    
                            .ExternalClass,
                            .ExternalClass p,
                            .ExternalClass td,
                            .ExternalClass div,
                            .ExternalClass span,
                            .ExternalClass font {
                                line-height: 100%;
                            }
                    
                            table,
                            td,
                            th {
                                mso-table-lspace: 0 !important;
                                mso-table-rspace: 0 !important;
                                border-collapse: collapse;
                            }
                    
                            u + .body table, u + .body td, u + .body th {
                                will-change: transform;
                            }
                    
                            body, td, th, p, div, li, a, span {
                                -webkit-text-size-adjust: 100%;
                                -ms-text-size-adjust: 100%;
                                mso-line-height-rule: exactly;
                            }
                    
                            img {
                                border: 0;
                                outline: 0;
                                line-height: 100%;
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                            }
                    
                            a[x-apple-data-detectors] {
                                color: inherit !important;
                                text-decoration: none !important;
                            }
                    
                            .pc-gmail-fix {
                                display: none;
                                display: none !important;
                            }
                    
                            .body .pc-project-body {
                                background-color: transparent !important;
                            }
                    
                            @media (min-width: 621px) {
                                .pc-lg-hide {
                                    display: none;
                                } 
                    
                                .pc-lg-bg-img-hide {
                                    background-image: none !important;
                                }
                            }
                    </style>
                    <style>
                    @media (max-width: 620px) {
                    .pc-project-body {min-width: 0px !important;}
                    .pc-project-container {width: 100% !important;}
                    .pc-sm-hide {display: none !important;}
                    .pc-sm-bg-img-hide {background-image: none !important;}
                    table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
                    td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
                    .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
                    .pc-w620-fontSize-30 {font-size: 30px !important;}
                    .pc-w620-lineHeight-133pc {line-height: 133% !important;}
                    .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
                    .pc-w620-padding-10-35-10-35 {padding: 10px 35px 10px 35px !important;}
                    .pc-w620-itemsSpacings-20-0 {padding-left: 10px !important;padding-right: 10px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
                    .pc-w620-width-30 {width: 30px !important;}
                    .pc-w620-height-auto {height: auto !important;}
                    .pc-w620-width-47 {width: 47px !important;}
                    .pc-w620-fontSize-18px {font-size: 18px !important;}
                    
                    .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
                    .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
                    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
                    .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
                    .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
                    .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
                    .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
                    .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
                    
                    .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
                    .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
                    .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
                    .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
                    
                    .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
                    .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
                    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
                    .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
                    .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
                    .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
                    }
                    @media (max-width: 520px) {
                    .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
                    .pc-w520-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
                    }
                    </style>
                    <!--[if !mso]><!-- -->
                    <style>
                    @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } }
                    </style>
                    <!--<![endif]-->
                    <!--[if mso]>
                        <style type="text/css">
                            .pc-font-alt {
                                font-family: Arial, Helvetica, sans-serif !important;
                            }
                        </style>
                        <![endif]-->
                    <!--[if gte mso 9]>
                        <xml>
                            <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                    </head>

                    <body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
                    <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tr>
                    <td align="center" valign="top">
                        <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                        <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Header 2 -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse: separate; border-spacing: 0px;">
                                <tr>
                                <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 0px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td class="pc-w620-spacing-0-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                                    <img src="https://cloudfilesdm.com/postcards/image-1721834004286.png" class="" width="138" height="138" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:138px; height: auto; max-width: 100%; border: 0;" />
                                    </td>
                                    </tr>
                                    </table>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td align="center" valign="top" style="padding: 0px 0px 50px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                        <tr>
                                        <td valign="top" align="center">
                                        <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-133pc" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #000000; text-align: center; text-align-last: center;">
                                        <div><span style="color: rgb(0, 0, 0);letter-spacing: 3.8px;" data-letter-spacing-original="3.8">PASSWORD RESET</span>
                                        </div>
                                        </div>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Header 2 -->
                            </td>
                            </tr>
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Text -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 40px 10px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                    <tr>
                                    <td valign="top" align="left">
                                    <div class="pc-font-alt" style="line-height: 21px; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 15px; font-weight: normal; font-variant-ligatures: normal; color: #333333; text-align: left; text-align-last: left;">
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Dear ${curUser.firstName} ${curUser.lastName},</span>
                                        </div>
                                        <div><span>&#xFEFF;</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">We wanted to let you know that your password for your Chai Pot account has been successfully reset. If you initiated this change, you can now log in using your new password.</span>
                                        </div>
                                        <div><span>&#xFEFF;</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">If you did not request a password reset, please contact us immediately at </span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">info@chaipot.co.in </span><span style="font-family: 'Helvetica', Arial, serif;">to secure your account.</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;font-weight: 700;font-style: normal;">Need Help?</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">If you have any questions or encounter any issues, our support team is here to assist you. Feel free to contact us at info@chaipot.co.in.</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Thank you for being a valued member of the Chai Pot community. We look forward to serving you again soon!</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">﻿</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Warm regards,</span>
                                        </div>
                                        <div><span style="font-family: 'Helvetica', Arial, serif;">Team Chai Pot</span><span style="font-family: 'Arial', Helvetica, sans-serif;"><br/></span>
                                        </div>
                                    </div>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Text -->
                            </td>
                            </tr>
                            <tr>
                            <td valign="top">
                            <!-- BEGIN MODULE: Footer 7 -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                            <tr>
                                <td style="padding: 0px 0px 0px 0px;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td align="center" style="padding: 0px 0px 20px 0px;">
                                    <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr class="pc-grid-tr-first pc-grid-tr-last">
                                        <td class="pc-grid-td-first pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                        <tr>
                                            <td align="center" valign="middle">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <a class="pc-font-alt" href="https://www.facebook.com/p/Chai-Pot-100069293711634/" target="_blank" style="text-decoration: none;">
                                                    <img src="https://cloudfilesdm.com/postcards/f8c121e90b0402a278a21fcb1dfc7e49.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                </a>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        <td class="pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                        <tr>
                                            <td align="center" valign="middle">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <a class="pc-font-alt" href="https://www.youtube.com/channel/UCxVtF9dYeFJaGpf29qQgjxg" target="_blank" style="text-decoration: none;">
                                                    <img src="https://cloudfilesdm.com/postcards/ef780addc1ae729c7564d9844fea02e5.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                </a>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        <td class="pc-grid-td-last pc-w620-itemsSpacings-20-0" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0;">
                                        <tr>
                                            <td align="center" valign="middle">
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                            <tr>
                                            <td align="center" valign="top">
                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                <td valign="top">
                                                <a class="pc-font-alt" href="https://www.instagram.com/chaipotofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style="text-decoration: none;">
                                                    <img src="https://cloudfilesdm.com/postcards/b31d13b76ca84bb9772c51ce4684e42a.png" class="pc-w620-width-30 pc-w620-height-auto" width="20" height="20" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width:20px; height:20px;" alt="" />
                                                </a>
                                                </td>
                                                </tr>
                                                </table>
                                            </td>
                                            </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                    <td align="center" valign="top" style="padding: 0px 0px 14px 0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-w620-width-47" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                        <tr>
                                        <td valign="top" align="center">
                                        <a class="pc-font-alt pc-w620-fontSize-18px" href="https://chaipot.co.in" style="text-decoration: none; line-height: 143%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: center; text-align-last: center;">
                                        <span style="letter-spacing: 0.4px;" data-letter-spacing-original="0.4px">chaipot.co.in</span> 
                                        </a>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                                </table>
                                </td>
                            </tr>
                            </table>
                            <!-- END MODULE: Footer 7 -->
                            </td>
                            </tr>
                        </table>
                        </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    </table>
                    <!-- Fix for Gmail on iOS -->
                    <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    </body>

                    </html>

                        `,
              };
              mailTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Error sending email: ", error);
                } else {
                  console.log("Email sent: ", info.response);
                }
              });
            res.status(200).json({message:"Password updated successful",user:{
                _id: curUser._id,
                firstName : curUser.firstName,
                lastName : curUser.lastName,
                email : curUser.email,
                phoneNo : curUser.phoneNo
            }})
            await Otp.deleteOne({email})
        }
        else{
            return res.status(400).json({message:"incorrect OTP"})
        }
        
    } catch (error) {
        console.log("error:" + error.message)
        res.status(500).json({message:"Internal server error"})
        
    }
}
