import tkinter as tk

window = tk.Tk()
window.title("Test Window")
window.geometry("1600x1080")
newLabel = tk.Label(text="The window has launched")
newLabel.grid(column=0,row=0)
window.mainloop()