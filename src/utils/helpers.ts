export const getId = (value: string) => {
    const splited = value.split("/")
    return splited[6] || ""
}