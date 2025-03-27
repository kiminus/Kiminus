# Common Errors in MkDocs and Solutions
### Error: cannot find module 'material.extensions.emoji' (No module named 'material')
details: 
```powershell
PS P:\Coding\Kiminus\docs> mkdocs serve
Error: MkDocs encountered an error parsing the configuration file: while constructing a Python object
cannot find module 'material.extensions.emoji' (No module named 'material')
  in "P:\Coding\Kiminus\docs\mkdocs.yml", line 37, column 20
PS P:\Coding\Kiminus\docs> 
```
solution:
- make sure to activate the python virtual environment, then serve
```powershell
PS P:\Coding\Kiminus\docs> ../venv/Scripts/activate
(venv) PS P:\Coding\Kiminus\docs> mkdocs serve
```