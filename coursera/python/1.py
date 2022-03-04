 
import os, glob
from PIL import Image
 
nsize = 228, 228
 
for file in glob.glob("ic_*"):
       imag = Image.open(file).convert('RGB')
       imag.rotate(270).resize((nsize)).save("/opt/icons/" + file, "JPEG")