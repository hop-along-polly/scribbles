# scribbles
A Completely Unstyled Component Library


## Component Ideas

```
I want to support
  - Multiple Icon Libs (Font Awesome etc.)
  - Any CSS Library (tailwind, sass, vanilla css etc.)
```
**:thinking: I may just have generic fields such as TextField that suppors an editable and protected/prvate attributes I'm kinda thinking against this though because sometimes you just need a display field and other times you just need an input field. Always having them together means you'd overload them with attributes)**

- Button Components
  - SaveAndContinue
  - ActionButton
  - NavButton
- Input Components
  - Text Fields (Add protected/private atribute which slugs/hides the value)
    - Text Field
    - Phone Field
    - Email Field
    - Address Field
  - Toggle
  - Drop Down Select
    - Single Option Select
    - Multiple Option Select
  - Option
    - Single Select Option
    - Multiple Select Option
  - Checkbox Components
  - Signature Block
  - Date Field
    ```
    This one should support various masks `yyyy/mm/dd` `dd/mm/yyyy` etc. while accepting free form input
    support a open-date-picker attribute which will pop-up a calendar that the user can choose a date from
    ```
- Display Components
  - Text Field (Support editable attribute that swtches to a Input Component > Text Field)
  - Phone Field (support editable attribute)
  - List
  - Table
  - Card
  - Image Frame (A frame where an image would go, basiclly to control the size of the image. Mybe the alignment as well)
  - Icon (Not sure this is needed - unless I support a lot of my own icons, but I'd rather make it support any of the common free icon libraries.)

- Upload/Download Document's Components
  - Upload Drop Zone (react-dropzone handles the functionality exceptionally well.)
  - Document Link
  - File Tree (Maybe this one seems a little tricky)

- Forms
  - Register
  - Login
  - Payment

- Navigation
  - NestedNavHeader
  - ResponsiveNavHeader


---- NOT SOLD ON SUPPORTING ANYTHING BELOW THIS LINE -----
- Layouts
  - Centered layout
  - 2-column layout
  - left-aligned
  - right-aligned

High Order Components
  - SearchableTable
    - Export Results Modal
  - Dashboard
