import axios from "axios";
import { getMyIP, info, setIP } from "./info";

test('test async success', async () =>{
    const dispatchMock = jest.fn();
    const responseMock = {data: { ip_addr: "128.128.128.128"}};
    axios.get = jest.fn().mockResolvedValue(responseMock);

    await getMyIP()(dispatchMock);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(setIP('128.128.128.128'));
});

test('test async error', async () =>{
    const dispatchMock = jest.fn();
    axios.get = jest.fn().mockRejectedValue(new Error('Network Error'));

    await getMyIP()(dispatchMock);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(setIP('-'));
});