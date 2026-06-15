<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<!--  ----------------------------------------------------------------------  -->

<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->

<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dg70000087CJB" method="POST">

<input type=hidden name="oid" value="00Dg70000087CJB">
<input type=hidden name="retURL" value="https://edintel-b2c.vercel.app/thank-you">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="suriya@m-intelligence.tech">                                     -->
<!--  ----------------------------------------------------------------------  -->

<label for="salutation">Salutation</label><select  id="salutation" name="salutation"><option value="">--None--</option><option value="Mr.">Mr.</option>
<option value="Ms.">Ms.</option>
<option value="Mrs.">Mrs.</option>
<option value="Dr.">Dr.</option>
<option value="Prof.">Prof.</option>
<option value="Mx.">Mx.</option>
</select><br>

<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>

<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>

<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>

<label for="mobile">Mobile</label><input  id="mobile" maxlength="40" name="mobile" size="20" type="text" /><br>

Date of Birth:<span class="dateInput dateOnlyInput"><input  id="00Ng700000C6Adh" name="00Ng700000C6Adh" size="12" type="text" /></span><br>

Preferred Branch:<select  id="00Ng700000C5dQ1" name="00Ng700000C5dQ1" title="Preferred Branch"><option value="">--None--</option><option value="Bangkapi">Bangkapi</option>
<option value="Silom">Silom</option>
<option value="Chaengwattana">Chaengwattana</option>
<option value="Chonburi">Chonburi</option>
</select><br>

<input type="submit" name="submit">

</form>
