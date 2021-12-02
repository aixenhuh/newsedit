<%@ page import="javax.crypto.*, javax.crypto.spec.*,  java.io.*, sun.misc.BASE64Decoder, sun.misc.BASE64Encoder, java.text.DateFormat, java.text.SimpleDateFormat, java.util.*, java.net.URLDecoder, java.net.URLEncoder"%>
<%
    String SBS_NEWSNET_URL = "https://newsnet.sbs.co.kr"; // ï¿½î¿µ NEWSNET URL
    String SBS_ADMIN_URL = "http://newsadmin.sbs.co.kr";	// ï¿½î¿µ AS-IS ADMIN URL
    //String SBS_NEWSEDIT_URL = "http://newsedit.sbs.co.kr";	// ï¿½î¿µ TO-BE ADMIN URL(newsedit.sbs.co.kr)
    String SBS_NEWSEDIT_URL = "https://newsedit.sbs.co.kr";

    String SBS_NEWSCMS_URL = "http://newscms.sbs.co.kr";	// ï¿½î¿µ NEWSCMS URL(http://admin.sbs.co.kr/news, http://newscms.sbs.co.kr)
    String SBS_MOBILE_END_URL = "https://mnews.sbs.co.kr/news";	//ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ URL
    String SBS_WEB_END_URL = "https://news.sbs.co.kr/news";	//ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ URL

    String SBS_PC_URL = "https://news.sbs.co.kr";
    String SBS_MOBILE_URL = "https://mnews.sbs.co.kr";
    String SBS_ENT_URL = "https://ent.sbs.co.kr";

    String SBS_IMG_URL = "https://img.sbs.co.kr";	// img.sbs.co.kr ï¿½Ì¹ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½

//	String SBS_NEWSNET_URL = "http://localhost:8080";	// ï¿½ï¿½ï¿½ï¿½ NEWSNET URL
//	String SBS_ADMIN_URL = "http://localhost:8084/newsadmin";	// ï¿½ï¿½ï¿½ï¿½ AS-IS ADMIN URL
//	String SBS_NEWSEDIT_URL = "http://localhost:8088";	// ï¿½ï¿½ï¿½ï¿½ TO-BE ADMIN URL
%>
<%!
    public static String Decrypt(String text) throws Exception
    {
        String key = "SBSNEWS20160523";
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        byte[] keyBytes= new byte[16];
        byte[] b= key.getBytes("UTF-8");
        int len= b.length;
        if (len > keyBytes.length) len = keyBytes.length;
        System.arraycopy(b, 0, keyBytes, 0, len);
        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
        IvParameterSpec ivSpec = new IvParameterSpec(keyBytes);
        cipher.init(Cipher.DECRYPT_MODE,keySpec,ivSpec);

        BASE64Decoder decoder = new BASE64Decoder();
        byte [] results = cipher.doFinal(decoder.decodeBuffer(text));
        // return new String(cipher.doFinal(decoder.decodeBuffer()),"UTF-8");
        return new String(results,"UTF-8");
    }

    public static String Encrypt(String text, String key) throws Exception
    {
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        byte[] keyBytes= new byte[16];
        byte[] b= key.getBytes("UTF-8");
        int len= b.length;
        if (len > keyBytes.length) len = keyBytes.length;
        System.arraycopy(b, 0, keyBytes, 0, len);
        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
        IvParameterSpec ivSpec = new IvParameterSpec(keyBytes);
        cipher.init(Cipher.ENCRYPT_MODE,keySpec,ivSpec);

        byte[] results = cipher.doFinal(text.getBytes("UTF-8"));
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(results);
    }

    public static String logInDCheck(String deKey) throws Exception
    {
        String useKey = "N";
        String[]  keyArray = deKey.split("[||]");
        //keyArray[2] key ï¿½ï¿½ï¿½ï¿½ ï¿½Ã°ï¿½

        DateFormat keyFormat = new SimpleDateFormat("yyyyMMddkkmmssSSS");
        Date keyDate = keyFormat.parse(keyArray[2]);
        keyDate.setDate(keyDate.getDate()+1);

        DateFormat nowFormat = new SimpleDateFormat("yyyyMMddkkmmssSSS");
        Calendar cal = Calendar.getInstance();
        String nowDate =  nowFormat.format(cal.getTime());
        Date compareDate =nowFormat.parse(nowDate);

        // key ï¿½ï¿½ï¿½ï¿½ 1ï¿½ï¿½ ï¿½ï¿½ keyDate, ï¿½ï¿½ï¿½ï¿½ date ï¿½ï¿½
        if(keyDate.after(compareDate)){
            useKey = "Y";
        }else{
            useKey = "N";
        }
        return useKey;
    }

%>